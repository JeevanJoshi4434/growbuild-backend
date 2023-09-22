const verifyToken = require('../config/Verification');
const router = require('express').Router();
const Buyermaster = require('../Models/Buyermaster');
const Demands = require('../Models/Demands');
/// Payment Master - Demands (price)

router.get('/payment/status',verifyToken, async (req, res) => {
    try {
      const getdemands = await Demands.find({ Building, stage_name: payment_stage })
        .populate('Buyermaster'); 
  
      res.json(getdemands);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

module.exports = router;