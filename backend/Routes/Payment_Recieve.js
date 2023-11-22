const router = require('express').Router();
const verifyToken = require('../config/Verification');
const projectModal = require('../Models/Project');
const buildingModal = require('../Models/Buildings');
const Bookings = require('../Models/Bookings');
const paymentRecieve = require('../Models/paymentRecieve');
const Units = require('../Models/Units');
const deemandModal = require('../Models/Demands');
// create
router.post('/create/payment', verifyToken, async (req, res) => {
    const { BookingID, Payment_Number, Paymentdate, payment_head, PaymentAmount, sgst, cgst, Stax, narration, narration_amount, check, DD, rtgs, neft, net_banking, credit_card, bounced, bank, branch, amount, totalAmount, leftAmount, paidAmount } = req.body;
    const payment = new paymentRecieve({
        BookingID,
        Payment_Number,
        Paymentdate,
        payment_head,
        PaymentAmount,
        sgst,
        cgst,
        Stax,
        narration,
        narration_amount,
        check,
        DD,
        rtgs,
        neft,
        net_banking,
        credit_card,
        bounced,
        bank,
        branch,
        amount,
        totalAmount,
        leftAmount,
        paidAmount
    })
    try {
        const savedPayment = await payment.save();
        res.status(200).json(savedPayment);
    } catch (err) {
        res.status(500).json(err);
    }
})

// update 
router.put('/update/payment/:id', verifyToken, async (req, res) => {
    const payment = await paymentRecieve.findById(req.params.id);
    if (!payment) return res.status(404).json("Not Found!");
    try {
        const updatedPayment = await paymentRecieve.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json(updatedPayment);
    } catch (err) {
        res.status(500).json(err);
    }
})

// DELETE
router.delete('/delete/payment/:id', verifyToken, async (req, res) => {
    const payment = await paymentRecieve.findById(req.params.id);
    if (!payment) return res.status(404).json("Not Found!");
    try {
        const deletedPayment = await paymentRecieve.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedPayment);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get one
router.get('/get/payment/:id', verifyToken, async (req, res) => {
    const payment = await paymentRecieve.findById(req.params.id);
    if (!payment) return res.status(404).json("Not Found!");
    try {
        const paymentR = await paymentRecieve.findById(req.params.id);
        res.status(200).json(paymentR);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get(`/get/payment/detail/:project/:building`, async (req, res) => {
    const { project, building } = req.params;
    if (!project || !building) return res.status(404).json("Not Found!");
    const projectR = await projectModal.findById(project);
    if (!projectR) return res.status(404).json("Not Found!");
    const buildingR = await buildingModal.findById(building);
    if (!buildingR) return res.status(404).json("Not Found!");
    const payment = await Bookings.find({ Project: project, building: building });
    if (!payment) return res.status(404).json("Not Found!");
    const profile = {
        project: projectR.Name,
        building: buildingR.buildingName
    }
        const paymentR = payment.filter((item) => {
            if (item.Project == project && item.building == building) {
                return item;
            }
        });
        let data = [];
        for (let i = 0; i < paymentR.length; i++) {
            let obj = {};
            const data = await paymentRecieve.find({ BookingID: paymentR[i]._id });
            if (!data) continue;
            obj = {
                name: paymentR[i].first_applicant_name,
                unit: paymentR[i].unit,
                floor: paymentR[i].floor,
                amount: data.paidAmount,
                mode: data.check ? `Cheque` : data.DD ? `DD` : data.rtgs ? `RTGS` : data.neft ? `NEFT` : data.net_banking ? `Net Banking` : data.credit_card ? `Credit Card` : `Bounced`,
                date: data[0].date
            };
            data.push(obj);
        }
        res.status(200).json({ err: 0, data, profile });
    
})


router.get('/get/all/payment/due/:building/:unit',  async (req, res) => {
    const { building, unit } = req.params;
    if (!building || !unit) return res.status(404).json("Not Found!");
    const buildingR = await buildingModal.findById(building);
    if (!buildingR) return res.status(404).json("Not Found!");
    const profile = {
        building: buildingR.buildingName,
        unit
    }
        const booking = await Bookings.findOne({building: building, unit: unit});
        if (!booking) return res.status(404).json("Not Found!");
        let data = [];
        for (let i = 0; i < booking.pendingDemands.length; i++) {
            const total = 0;
            let obj = {};
            const data = await deemandModal.findById(booking.pendingDemands[i]);
            if (!data) continue;
            total += data.amount;
            obj = {
                name: data.stage_name,
                amount: data.amount,
            };
            data.push(obj);
        }
        res.status(200).json({ err: 0, data, profile,total });
    
})

router.get('/get/all/payment/single/:building/:unit',  async (req, res) => {
    const { building, unit } = req.params;
    if (!building || !unit) return res.status(404).json("Not Found!");
    const buildingR = await buildingModal.findById(building);
    if (!buildingR) return res.status(404).json("Not Found!");
    const unitR = await Units.findOne({building:building});
    const profile = {
        building: buildingR,
        unit,
        unitDetails:unitR

    }
        const booking = await Bookings.findOne({building: building, unit: unit});
        if (!booking) return res.status(404).json("Not Found!");
        let data = [];
        for (let i = 0; i < booking.demands.length; i++) {
            const total = 0;
            let obj = {};
            const data = await deemandModal.findById(booking.demands[i]);
            if (!data) continue;
            total += data.amount;
            obj = {
                name: data.stage_name,
                amount: data.amount,
            };
            data.push(obj);
        }
        res.status(200).json({ err: 0, data, profile,total,booking});
    }
)

// get all 
router.get('/get/all/payment', verifyToken, async (req, res) => {
    const { page, limits } = req.query;
    try {
        const paymentR = await paymentRecieve.find().sort({ createdAt: -1 }).skip((page - 1) * limits).limit(limits);;
        res.status(200).json(paymentR);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;