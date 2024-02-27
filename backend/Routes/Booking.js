const router = require('express').Router();
const { default: mongoose } = require('mongoose');
const verifyToken = require('../config/Verification');
const Bookings = require('../Models/Bookings');
const Demand = require('../Models/Demands');
// create Booking
router.post('/create/booking', verifyToken, async (req, res) => {
    const { Project, totalAmount, bookingPrice, unitPrice, demands, building, floor, unit, extra_facility, parking, booking_price, booking_date, allotment_date, agreement_date, first_applicant_name, first_applicant_father_name, first_applicant_husband_name, first_applicant_permanentAddress, first_applicant_correspondAddress, first_applicant_contactNumber, first_applicant_email, first_applicant_dob, first_applicant_AadharNumber, first_applicant_pan_number, first_applicant_City, first_applicant_police_station, first_applicant_country, first_applicant_occupation, first_applicant_religion, first_applicant_status, second_applicant_name, second_applicant_father_name, second_applicant_husband_name, second_applicant_contact_number, second_applicant_email, second_applicant_dob, second_applicant_pan_number, second_applicant_occupation, second_applicant_address, second_applicant_relation_with_first_applicant, third_applicant_name, third_applicant_phone_number, fourth_applicant_name, fourth_applicant_phone_number, second_applicant_adhar_number, price_with_tax } = req.body;

    // Convert variables to numbers if they are not null or undefined
    const parsedTotalAmount = totalAmount !== undefined ? parseFloat(totalAmount) : null;
    const parsedBookingPrice = bookingPrice !== undefined ? parseFloat(bookingPrice) : null;
    const parsedUnitPrice = unitPrice !== undefined ? parseFloat(unitPrice) : null;
    let pendingAmount = (parsedTotalAmount !== null && parsedBookingPrice !== null) ? (parsedTotalAmount - booking_price) : 0;
    const demand = await Demand.find({ Project: Project, Building: building, Status: 'completed' });
    console.log(demand);
    // Iterate through each demand
    for (const demandData of demand) {
        // Extract the percent amount from the demand
        let percentAmount = demandData.amount;
        // Calculate the adjustment based on the percentage
        let demandAdjustment = (percentAmount / 100) * pendingAmount;
        // Update pendingAmount
        pendingAmount += demandAdjustment;
        console.log({pending:pendingAmount});
    }
    console.log({pendingTotal:pendingAmount});

    const newBooking = new Bookings({
        Project,
        building,
        floor,
        unit,
        parking,
        booking_price,
        booking_date,
        allotment_date,
        agreement_date,
        first_applicant_name,
        first_applicant_father_name,
        first_applicant_husband_name,
        first_applicant_permanentAddress,
        first_applicant_correspondAddress,
        first_applicant_contactNumber,
        first_applicant_email,
        first_applicant_dob,
        first_applicant_AadharNumber,
        first_applicant_pan_number,
        first_applicant_City,
        first_applicant_police_station,
        first_applicant_country,
        first_applicant_occupation,
        first_applicant_religion,
        first_applicant_status,
        second_applicant_name,
        second_applicant_father_name,
        second_applicant_husband_name,
        second_applicant_contact_number,
        second_applicant_email,
        second_applicant_dob,
        second_applicant_pan_number,
        second_applicant_adhar_number,
        second_applicant_occupation,
        second_applicant_address,
        second_applicant_relation_with_first_applicant,
        third_applicant_name,
        third_applicant_phone_number,
        fourth_applicant_name,
        fourth_applicant_phone_number,
        price_with_tax: price_with_tax !== undefined ? parseFloat(price_with_tax).toFixed(2) : null,
        totalAmount: parsedTotalAmount !== null ? parsedTotalAmount.toFixed(2) : null,
        extra_facility,
        bookingPrice: parsedBookingPrice !== null ? parsedBookingPrice.toFixed(2) : null,
        unitPrice: parsedUnitPrice !== null ? parsedUnitPrice.toFixed(2) : null,
        demands: demand,
        pending: parseFloat(pendingAmount).toFixed(2)
    });

    const savedBooking = await newBooking.save();
    res.status(200).json(savedBooking);
});


// update booking
router.put('/update/booking/:id', verifyToken, async (req, res) => {
    const Booking = await Bookings.findById(req.params.id);
    if (!Booking) return res.status(404).send('Booking not found');
    try {
        const updatedBooking = await Bookings.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json(updatedBooking);
    } catch (error) {
        res.status(500).json(error);
    }
})

// delete booking

router.delete('/delete/booking/:id', verifyToken, async (req, res) => {
    const Booking = await Bookings.findById(req.params.id);
    if (!Booking) return res.status(404).send('Booking not found');
    try {
        const deletedBooking = await Bookings.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedBooking);
    } catch (error) {
        res.status(500).json(error);
    }
})

// get one booking
router.get('/get/booking/:id', verifyToken, async (req, res) => {
    const Booking = await Bookings.findById(req.params.id);
    if (!Booking) return res.status(404).send('Booking not found');
    try {
        const booking = await Bookings.findById(req.params.id);
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json(error);
    }
})

// get all booking
router.get('/get/all/booking', verifyToken, async (req, res) => {
    const { page, limits } = req.query;
    try {
        const bookings = await Bookings.find().sort({ createdAt: -1 }).skip((page - 1) * limits).limit(limits);
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/:id/:project/:unit', verifyToken, async (req, res) => {
    try {

        const booking = await Bookings.findOne({ building: req.params.id, Project: req.params.project, unit: req.params.unit });
        if (!booking) return res.status(201).send('Booking not found');

        let demand = await Demand.find({ Building: req.params.id, Project: req.params.project, Status: 'completed' });
        let completedArray = [];
        completedArray = demand.filter((d) => {
            if (booking.demands.includes(new mongoose.Types.ObjectId(d._id))) return d;
        });
        demand = demand.filter((d) => {
            if (booking.pendingDemands.includes(new mongoose.Types.ObjectId(d._id))) return d;
        });

        demand = demand.map((d) => {
            d.Status = 'pending';
            return d;
        });

        let costPercentage = 0;
        demand.forEach((i) => {
            costPercentage += i.amount;
        });

        const TotalPending = parseInt(booking.pending) + parseInt(booking.pending * (costPercentage / 100));

        // Concatenate the demands from booking, and reassign to 'demand'
        demand = demand.concat(completedArray);

        res.status(200).json({ booking, demand, pending: TotalPending });
    } catch (e) {
        return res.status(500).json({ error: e });
    }
})
module.exports = router;