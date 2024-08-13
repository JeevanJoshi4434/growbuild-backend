const router = require('express').Router();
const Units = require('../Models/Units');
const Building = require('../Models/Buildings');
const Bookings = require('../Models/Bookings');
const mongoose = require('mongoose');
const verifyToken = require('../config/Verification');
// const {Project, building, unit_name, total_area_this_unit, carpet_area, build_up_area, balcony_area, total_number_of_flat_on_this_unit, parking_detail, extra_facilities} = req.body
// create Unit

/* This code is defining a route handler for creating a new unit. It expects the following properties
in the request body: `Project`, `building`, `unit_name`, `pricewithtax`, `sgst`, `cgst`,
`total_area_this_unit`, `carpet_area`, `build_up_area`, `balcony_area`,
`total_number_of_flat_on_this_unit`, `parking_detail`, `extra_facilities`, `price`, `totalPrice`,
`multiple`, `floors`, and `units`. */
router.post('/create/unit', verifyToken, async (req, res) => {
    const { Project, building, unit_name, pricewithtax, sgst, cgst, total_area_this_unit, carpet_area, build_up_area, balcony_area, total_number_of_flat_on_this_unit, parking_detail, extra_facilities, price, totalPrice, multiple, floors } = req.body;
    const unitsToSave = []; // Create an array to store the unit objects

    if (!multiple) {
        const newUnit = new Units({
            Project,
            building,
            unit_name,
            total_area_this_unit,
            carpet_area,
            build_up_area,
            balcony_area,
            total_number_of_flat_on_this_unit,
            parking_detail,
            extra_facilities,
            pricewithtax,
            sgst,
            cgst,
            totalPrice,
            price
        });
        unitsToSave.push(newUnit); // Add the unit object to the array
    } else {
        for (let i = 0; i < floors; i++) {
            let unitName = `${i + 1}${unit_name}`;
            const newUnit = new Units({
                Project,
                building,
                unit_name: unitName,
                total_area_this_unit,
                carpet_area,
                build_up_area,
                balcony_area,
                total_number_of_flat_on_this_unit,
                parking_detail,
                extra_facilities,
                pricewithtax,
                sgst,
                cgst,
                totalPrice,
                price
            });
            unitsToSave.push(newUnit); // Add the unit object to the array
        }
    }

    try {
        const savedUnits = await Units.insertMany(unitsToSave); // Save all units in the array
        res.status(200).json(savedUnits);
    } catch (error) {
        res.status(500).json(error);
    }
});


// update unit

router.put('/update/unit/:id', verifyToken, async (req, res) => {
    try {
        const unit = await Units.findById(req.params.id);
        if (!unit) return res.status(404).send("unit not found");
        const updatedUnit = await Units.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json(updatedUnit);
    } catch (error) {
        res.status(500).json(error);
    }
})

// delete unit
router.delete('/delete/unit/:id', verifyToken, async (req, res) => {
    try {
        const unit = await Units.findById(req.params.id);
        if (!unit) return res.status(404).send("unit not found");
        const deletedUnit = await Units.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedUnit);
    } catch (error) {
        res.status(500).json(error);
    }
})

// get all unit
router.get('/all/unit', verifyToken, async (req, res) => {
    const { page, limits } = req.query;
    try {
        const unit = await Units.find().sort({ createdAt: -1 }).skip((page - 1) * limits).limit(limits);
        res.status(200).json(unit);
    } catch (error) {
        res.status(500).json(error);
    }
})

// get one unit
router.get('/unit/:id', verifyToken, async (req, res) => {
    try {
        const unit = await Units.findById(req.params.id);
        if (!unit) return res.status(404).send("unit not found");
        res.status(200).json(unit);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/find/unit/:building/:project', verifyToken, async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.building) || !mongoose.isValidObjectId(req.params.project)) return res.status(400).json("Provided Information is not Valid.");
    const building = await Building.findById(req.params.building);
    if (!building) return res.status(404).send("building not found");
    try {
        const unit = await Units.find({ building: req.params.building, Project: req.params.project });
        res.status(200).json(unit);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/find/unit/available/:building/:project', verifyToken, async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.building) || !mongoose.isValidObjectId(req.params.project)) {
        return res.status(400).json("Provided Information is not Valid.");
    }

    try {
        const building = await Building.findById(req.params.building);

        if (!building) {
            return res.status(404).send("Building not found");
        }

        // Find all units in the specified building and project
        const allUnits = await Units.find({ building: req.params.building, Project: req.params.project });

        // Find all booked units in the specified building and project
        const bookedUnits = await Bookings.find({ building: req.params.building, Project: req.params.project });

        // Create a set of unit IDs that are booked for efficient lookup
        const bookedUnitIds = new Set(bookedUnits.map(bookedUnit => bookedUnit.unit.toString()));
        // Filter out units that are not booked
        const availableUnits = allUnits.filter(unit => !bookedUnitIds.has(unit._id.toString()));
        const UnavailableUnits = allUnits.filter(unit => bookedUnitIds.has(unit._id.toString()));
        res.status(200).json({availableUnits, UnavailableUnits, allUnits});
    } catch (error) {
        res.status(500).json(error);
    }
});
module.exports = router;