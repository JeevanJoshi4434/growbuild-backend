const router = require('express').Router();
// const verifyToken = require('../config/Verification');
const Demands = require('../Models/Demands');
const BuildingModal = require('../Models/Buildings');
const ProjectModal = require('../Models/Project');
const UnitModal = require('../Models/Units');
const BookingModal = require('../Models/Bookings');
const {  default: mongoose } = require('mongoose');

router.get('/get/stats',  async (req, res) => {
    const demands = await Demands.countDocuments();
    const buildings = await BuildingModal.countDocuments();
    const projects = await ProjectModal.countDocuments();
    const units = await UnitModal.countDocuments();
    const bookings = await BookingModal.countDocuments();

    const bookingStat = {
        bookings: bookings,
        total: units,
    }

    // payment stats (total payment raised & total payment collected)
    const booking = await BookingModal.find();
    let totalDemandListPrice = 0;
    let totalDemandListPriceWithoutPending = 0;

    // Iterate over each booking
    booking.forEach(bookingItem => {
        // Iterate over demandList for each booking
        bookingItem.DemandList.forEach(demand => {
            // Convert demand price to two decimal places
            const demandPrice = parseFloat(demand.price.toFixed(2));
            // Add demandList price to totalDemandListPrice
            totalDemandListPrice += demandPrice;

            // Check if demandId is present in pendingDemands
            const isPending = bookingItem.pendingDemands.some(pendingDemandId => pendingDemandId?.toString() ===  demand.demandId?.toString());
             
            // If demandId is not present in pendingDemands, add demandList price to totalDemandListPriceWithoutPending
            if (!isPending) {
                totalDemandListPriceWithoutPending += demandPrice;
            }
        });
    });



    res.status(200).json({ demands: demands, buildings: buildings, projects: projects, totalUnits: units, customers: bookings, bookingStat: bookingStat, totalPrice: totalDemandListPrice, totalPriceCollected: totalDemandListPriceWithoutPending });
})

module.exports = router;