const router = require('express').Router();
const verifyToken = require('../config/Verification');
const Buyermaster = require('../Models/Buyermaster');
const Bookings = require('../Models/Bookings');
// const {ProProject, Building, floor, unit, secondfloor, flat, parking, booking_price,booking_date, allotment_date, agreement_date} = req.body;
// create
router.post('/create/buyermaster',verifyToken, async (req, res) => {
    const { Project, Building, floor, unit, secondfloor, flat, parking, booking_price, booking_date, allotment_date, agreement_date, Owner_name, payment_stage, price, payment_receive, payment_type, check_number, date, bank_name, branch_name, bank_account, card_number,balance } = req.body;
    const newBuyermaster = new Buyermaster({
        Project,
        Building,
        floor,
        unit,
        secondfloor,
        flat,
        parking,
        booking_price,
        booking_date,
        allotment_date,
        agreement_date,
        Owner_name,
        payment_stage,
        price,
        payment_receive,
        payment_type,
        check_number,
        date,
        bank_name,
        branch_name,
        bank_account,
        card_number,
        balance:(balance-payment_receive)
    })
    try {
        const booking = await Bookings.findOneAndUpdate({building:Building,Project:Project,unit:unit},{
            $set:{
                pending:(balance-payment_receive)
            }
        });
        const savedBuyermaster = await newBuyermaster.save();
        res.status(200).json(savedBuyermaster);
    } catch (err) {
        res.status(500).json(err);
    }
})

// update
router.put('/update/buyermaster/:id',verifyToken, async (req, res) => {
    const Buyermaster = await Buyermaster.findById(req.params.id);
    if (!Buyermaster) return res.status(404).json("Not Found!");
    try {
        const updatedBuyermaster = await Buyermaster.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json(updatedBuyermaster);
    } catch (err) {
        res.status(500).json(err);
    }
})

// delete
router.delete('/delete/buyermaster/:id',verifyToken, async (req, res) => {
    const BuyerMaster = await Buyermaster.findById(req.params.id);
    if (!BuyerMaster) return res.status(404).json("Not Found!");
    try {
        const deletedBuyermaster = await Buyermaster.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedBuyermaster);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get one
router.get('/get/buyermaster/:id',verifyToken, async (req, res) => {
    const isValid = await Buyermaster.findById(req.params.id);
    if (!isValid) return res.status(404).json("Not Found!");
    try {
        const BuyerMaster = await Buyermaster.findById(req.params.id);
        res.status(200).json(BuyerMaster);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get all
router.get('/get/all/buyermaster',verifyToken, async (req, res) => {
    const { page, limits } = req.query;
    try {
        const BuyerMaster = await Buyermaster.find().sort({ createdAt: -1 }).skip((page - 1) * limits).limit(limits);;
        res.status(200).json(BuyerMaster);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get(`/get/buyer/:Project/:Building/:floor/:unit/:payment_stage`, verifyToken, async(req,res)=>{
    const { Project , Building  , floor   , unit} = req.params ;
    try {
        const BuyerMaster = await Buyermaster.find({Project, Building, floor, unit,payment_stage});
        if(!BuyerMaster) return res.status(404).json({status:404});
        res.status(200).json({status:200,price:BuyerMaster.payment_receive});
    }catch (err){
        res.status(500).json(err);
    }
})
module.exports = router;