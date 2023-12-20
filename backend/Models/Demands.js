const mongoose = require('mongoose');

const Demand = new mongoose.Schema({
   Project: {
      type: String
   },
   projectName: {
      type: String
   },
   Building: {
      type: String
   },
   buildingName: {
      type: String
   },
   stage_name: {
      type: String
   }, amount: {
      type: Number
   },
   extra_facilities: {
      type: Array
   },
   Status: {
      type: String,
      default: 'pending'
   },
   createdAt : {
      type: Date,
      default:new Date()
   }

})

module.exports = mongoose.model('Demand', Demand);