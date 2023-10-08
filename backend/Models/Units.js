const mongoose = require('mongoose');

const Unit = new mongoose.Schema({
    Project: {
        type: String,
    },
     building: {
        type: String,
    },
     unit_name: {
        type: String,
    },
     total_area_this_unit: {
        type: Number
    },
     carpet_area: {
        type: Number
    },
     build_up_area: {
        type: Number
    },
     balcony_area: {
        type: Number
    },
     total_number_of_flat_on_this_unit: {
        type: Number
    },
     parking_detail: {
        type: Number
    },
     extra_facilities: {
        type: Array
    },
    price:{
        type:Number,
    },
    totalPrice:{
        type:Number,
    },
    gst:{
        type:Number
    },
    pricewithtax:{
        type:Number
    }
})

module.exports = mongoose.model('Unit', Unit);