const router = require('express').Router();
const verifyToken = require('../config/Verification');
const projectModal = require('../Models/Project');
const buildingModal = require('../Models/Buildings');
const Bookings = require('../Models/Bookings');
const paymentRecieve = require('../Models/paymentRecieve');
const Units = require('../Models/Units');
const deemandModal = require('../Models/Demands');
const Buyermaster = require('../Models/Buyermaster');
const { default: mongoose } = require('mongoose');
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
    console.log({ project: projectR, building: buildingR, payment: payment });
    const profile = {
        project: projectR.Name,
        building: buildingR.buildingName
    }
    const paymentR = payment.filter((item) => {
        if (item.Project == project && item.building == building) {
            return item;
        }
    });
    console.log({ total: paymentR });
    let dataArray = [];
    let obj = {};
    for (let i = 0; i < paymentR.length; i++) {
        const UnitR = await Units.findById(paymentR[i].unit);
        const userR = await Bookings.findOne({unit: paymentR[i].unit});
        obj = {
            name:  userR ? userR.first_applicant_name : 'Not Found',
            unit: UnitR ? UnitR.unit_name : 'Not Associated',
            amount: paymentR[i].bookingPrice.toFixed(2),
            mode: '--',
            balance: (paymentR[i].totalAmount.toFixed(2)) - (paymentR[i].bookingPrice.toFixed(2))
        };
        dataArray.push(obj);
    }
    console.log({ first: dataArray });
    const data = await Buyermaster.find({ Project: project, Building: building });
    for (let i = 0; i < data.length; i++) {
        const UnitR = await Units.findById(data[i].unit);
        const userR = await Bookings.findOne({unit: data[i].unit});
        obj = {
            name: userR ? userR.first_applicant_name : 'Not Found',
            unit: UnitR ? UnitR?.unit_name : 'Not Found',
            amount: data[i].payment_receive.toFixed(2),
            mode: data[i].payment_type,
            balance: data[i].balance.toFixed(2)
        };
        dataArray.push(obj);
    }
    console.log({ second: dataArray });
    res.status(200).json({ err: 0, dataArray, profile });

})

router.get(`/get/payment/due/detail/:project/:building`, async (req, res) => {
    const { project, building } = req.params;
    if (!project || !building) return res.status(404).json("Not Found!");
    const projectR = await projectModal.findById(project);
    if (!projectR) return res.status(404).json("Not Found!");
    const buildingR = await buildingModal.findById(building);
    if (!buildingR) return res.status(404).json("Not Found!");
    const payment = await Bookings.find({ Project: project, building: building });
    if (!payment) return res.status(404).json("Not Found!");
    console.log({ project: projectR, building: buildingR, payment: payment });
    const profile = {
        project: projectR.Name,
        building: buildingR.buildingName
    }
    const paymentR = payment.filter((item) => {
        if (item.Project == project && item.building == building) {
            return item;
        }
    });
    console.log({ total: paymentR });
    let dataArray = [];
    let obj = {};
    for (let i = 0; i < paymentR.length; i++) {
        const UnitR = await Units.findById(paymentR[i].unit);
        const userR = await Bookings.findOne({unit: paymentR[i].unit});
        obj = {
            name:  userR ? userR.first_applicant_name : 'Not Found',
            unit: UnitR ? UnitR.unit_name : 'Not Associated',
            amount: paymentR[i].bookingPrice.toFixed(2),
            mode: '--',
            balance: (paymentR[i].totalAmount.toFixed(2)) - (paymentR[i].bookingPrice.toFixed(2)),
            pending:paymentR[i].pending.toFixed(2),
            status:paymentR[i].pending > 0,
            value: await getValue(building, paymentR[i].unit)
        };
        dataArray.push(obj);
    }
    console.log({ second: dataArray });
    res.status(200).json({ err: 0, dataArray, profile,payment:paymentR,Bookings:payment, });

})
const getValue = async(building, unit)=>{
    if (!building || !unit) return 0;
    const buildingR = await buildingModal.findById(building);
    if (!buildingR) return 0;
    const unitR = await Units.findOne({ building: building });
    const profile = {
        building: buildingR,
        unit,
        unitDetails: unitR

    }
    console.log({ building: buildingR, unit: unitR });

    const PaymentTotal = await Buyermaster.find({ unit: unit, Building: building });
    const booking = await Bookings.findOne({ building: building, unit: unit });
    if (!booking) return 0;
    let dataArray = [];
    console.log({ bk: booking });
    let total = 0;
    for (let i = 0; i < booking.demands.length; i++) {
        let obj = {};
        const objectID = booking.demands[i].toString();
        const data = await deemandModal.findById(objectID);
        if (!data) continue;
        total += data.amount;
        obj = {
            name: data.stage_name,
            amount: data.amount,
        };
        console.log({ data: data, object: obj });
        dataArray.push(obj);
    }
    return total;
}


router.get('/get/all/payment/due/:building/:unit', async (req, res) => {
    const { building, unit } = req.params;
    if (!building || !unit) return res.status(404).json("Not Found!");
    const buildingR = await buildingModal.findById(building);
    const projectR = await projectModal.findById(buildingR.Project);
    if (!buildingR) return res.status(404).json("Not Found!");
    const unitR = await Units.findById(unit);
    if (!unitR) return res.status(404).json("Not Found!");
    const profile = {
        building: buildingR.buildingName,
        unit: unitR.unit_name,
        project: projectR.Name ? projectR.Name : 'Not Found'
    }
    console.log({ building: buildingR, unit: unit });
    const booking = await Bookings.findOne({ building: building, unit: unit });
    if (!booking) return res.status(404).json("Not Found!");
    console.log({ booking: booking });
    let dataArray = [];
    let total = 0;
    for (let i = 0; i < booking.pendingDemands.length; i++) {
        let obj = {};
        const objectID = booking.pendingDemands[i].toString();
        const data = await deemandModal.findById(objectID);
        if (!data) continue;
        total += data.amount;
        obj = {
            name: data.stage_name,
            amount: data.amount,
        };
        console.log({ data, object: obj });
        dataArray.push(obj);
    }
    res.status(200).json({ err: 0, dataArray, profile, total });

})



router.get('/get/all/payment/single/:building/:unit', async (req, res) => {
    const { building, unit } = req.params;
    if (!building || !unit) return res.status(404).json("Not Found!");
    const buildingR = await buildingModal.findById(building);
    if (!buildingR) return res.status(404).json("Not Found!");
    const unitR = await Units.findOne({ building: building });
    const profile = {
        building: buildingR,
        unit,
        unitDetails: unitR

    }
    console.log({ building: buildingR, unit: unitR });

    const PaymentTotal = await Buyermaster.find({ unit: unit, Building: building });
    const booking = await Bookings.findOne({ building: building, unit: unit });
    if (!booking) return res.status(404).json("Not Found!");
    let dataArray = [];
    console.log({ bk: booking });
    let total = 0;
    for (let i = 0; i < booking.demands.length; i++) {
        let obj = {};
        const objectID = booking.demands[i].toString();
        const data = await deemandModal.findById(objectID);
        if (!data) continue;
        total += data.amount;
        obj = {
            name: data.stage_name,
            amount: data.amount,
        };
        console.log({ data: data, object: obj });
        dataArray.push(obj);
    }
    res.status(200).json({ err: 0, dataArray, profile, total, booking, PaymentTotal });
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