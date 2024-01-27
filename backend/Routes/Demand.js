const router = require('express').Router();
const verifyToken = require('../config/Verification');
const Demands = require('../Models/Demands');
const BuildingModal = require('../Models/Buildings');
const ProjectModal = require('../Models/Project');
const UnitModal = require('../Models/Units');
const BookingModal = require('../Models/Bookings');

// create Demand

router.post('/create/demand', verifyToken, async (req, res) => {
    const { Project, Building, stage_name, amount, extra_facilities, } = req.body;
    const projectData = await ProjectModal.findById(Project);
    const buildingData = await BuildingModal.findById(Building);
    const newDemand = new Demands({
        Project,
        Building,
        projectName: projectData.Name,
        buildingName: buildingData.buildingName,
        stage_name,
        amount,
        extra_facilities,
    })
    try {
        const savedDemand = await newDemand.save();
        res.status(200).json(savedDemand);
    } catch (err) {
        res.status(500).json(err);
    }
})

// update
router.put('/update/demand/:id', verifyToken, async (req, res) => {
    const demand = await Demands.findById(req.params.id);
    if (!demand) return res.status(404).json("Not Found!");
    try {
        let multiple = false;
        const updatedDemand = await Demands.findByIdAndUpdate(req.params.id, { $set: req.body });
        const bookings = await BookingModal.find({ building: demand.Building, Project: demand.Project });
        for (const booking of bookings) {
            // Calculate the new "pending" value as the previous value plus 10% of the difference
            const newPending = booking.pending > 0 ? (booking.pending + (booking.pending * (demand.amount / 100)))?.toFixed(2) : 0.00;
            let obj = {}; 
            obj = {
                demandId:demand._id,
                demandName:demand.stage_name,
                demandAmount:demand.amount,
                price:newPending,
                bookingPending:booking.pending,
                bookingPrice:booking.booking_price,
                totalAmount:booking.totalAmount,
                onDate:new Date()

            }
            console.log({ obj: obj });
            // Update the document with the new "pending" value
            await BookingModal.updateOne(
                { _id: booking._id },
                {
                    $set: { pending: newPending },
                    $push: { pendingDemands: demand._id},
                }
            );

            await BookingModal.updateOne(
                { _id: booking._id },
                {
                    $push:{ DemandList: obj},
                }
            );
        }

        res.status(200).json(updatedDemand);
    } catch (err) {
        res.status(500).json(err);
    }
})
router.get('/demand/:id/:p', verifyToken, async (req, res) => {
    try {
        const demand = await Demands.find({ Project: req.params.p, Building: req.params.id });
        if (!demand) return res.status(201).json("Not Found!");
        res.status(200).json(demand);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/demand/percent/:id/:p', verifyToken, async (req, res) => {
    try {
        const demand = await Demands.find({ Project: req.params.p, Building: req.params.id });
        if (!demand) return res.status(201).json({ percent: "0", Available: [], inProgress: [], err: false });

        // Filter the demand array to include only objects with status "completed"
        const completedDemands = demand.filter(item => item.Status === "completed");
        const pendingDemands = demand.filter(item => item.Status !== "completed");

        // Calculate the sum of the 'amount' property in the filtered array
        const sumOfAmounts = completedDemands.reduce((total, item) => total + item.amount, 0);

        res.status(200).json({ percent: sumOfAmounts, Available: completedDemands, inProgress: pendingDemands, err: false, total: completedDemands.concat(pendingDemands) });
    } catch (error) {
        res.status(500).json({ err: true });
    }
});


router.get('/demand/status/:b/:p/:type', verifyToken, async (req, res) => {
    if (req.params.type !== "completed" && req.params.type !== "pending") return res.status(400).json("Invalid Type");
    try {
        const demand = await Demands.find({ Building: req.params.b, Project: req.params.p, Status: req.params.type });
        if (!demand) return res.status(201).json("Not Found!");
        res.status(200).json(demand);
    } catch (error) {
        res.status(500).json(error)
    }
})

// delete
router.delete('/delete/demand/:id', verifyToken, async (req, res) => {
    const demand = await Demands.findById(req.params.id);
    if (!demand) return res.status(404).json("Not Found!");
    try {
        const deletedDemand = await Demands.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedDemand);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get one
router.get('/get/demand/:id', verifyToken, async (req, res) => {
    try {
        const isValid = await Demands.findById(req.params.id);
        if (!isValid) return res.status(404).json("Not Found!");
        const demand = await Demands.findById(req.params.id);
        res.status(200).json(demand);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get all
router.get('/get/all/demand', verifyToken, async (req, res) => {
    const { page, limits } = req.query;
    try {
        const demands = await Demands.find().sort({ createdAt: -1 }).skip((page - 1) * limits).limit(limits);
        res.status(200).json(demands);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/get/all/demand/booking/detail', async (req, res) => {
    const {building,project,single,unit } = req.query;
    let data = [];
        if(single==="true"){
            const booking = await BookingModal.findOne({unit:unit});
            const unit = await UnitModal.findById(booking.unit);
            const project = await ProjectModal.findById(booking.Project);
            const building = await BuildingModal.findById(booking.building);
            let obj = {
                unit:unit.unit_name,
                project:project.Name,
                building:building.buildingName,
                detail:booking,
            }
            res.status(200).json(obj);
        }else{
            const bookings = await BookingModal.find({building:building,Project:project});
            for (const booking in bookings) {
                const unit = await UnitModal.findById(bookings[booking].unit);
                const project = await ProjectModal.findById(bookings[booking].Project);
                const building = await BuildingModal.findById(bookings[booking].building);
                let obj = {
                    unit:unit.unit_name,
                    project:project.Name,
                    building:building.buildingName,
                    detail:bookings[booking],
                    pending:bookings[booking].pending < 0.00
                }
                data.push(obj);
            }
            res.status(200).json(data);
        }
    
})


module.exports = router;