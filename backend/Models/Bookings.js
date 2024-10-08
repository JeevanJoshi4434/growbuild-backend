const mongoose = require('mongoose');

const Booking = new mongoose.Schema({
   Project: {
      type: String
   },
   building: {
      type: String
   },
   floor: {
      type: String
   },
   unit: {
      type: String
   },
   parking: {
      type: Number
   },
   booking_price: {
      type: Number
   },
   booking_date: {
      type: String
   },
   allotment_date: {
      type: String
   },
   agreement_date: {
      type: String
   },
   first_applicant_name: {
      type: String
   },
   first_applicant_father_name: {
      type: String
   },
   first_applicant_husband_name: {
      type: String
   },
   first_applicant_permanentAddress: {
      type: String
   },
   first_applicant_correspondAddress: {
      type: String
   },
   first_applicant_contactNumber: {
      type: Number
   },
   first_applicant_email: {
      type: String
   },
   first_applicant_dob: {
      type: String
   },
   first_applicant_AadharNumber: {
      type: Number
   },
   first_applicant_pan_number: {
      type: String
   },
   first_applicant_City: {
      type: String
   },
   first_applicant_police_station: {
      type: String
   },
   first_applicant_country: {
      type: String
   },
   first_applicant_occupation: {
      type: String
   },
   first_applicant_religion: {
      type: String
   },
   first_applicant_status: {
      type: String
   },
   second_applicant_name: {
      type: String
   },
   second_applicant_father_name: {
      type: String
   },
   second_applicant_husband_name: {
      type: String
   },
   second_applicant_contact_number: {
      type: Number
   },
   second_applicant_email: {
      type: String
   },
   second_applicant_dob: {
      type: String
   },
   second_applicant_adhar_number: {
      type: String
   },
   second_applicant_pan_number: {
      type: String
   },
   second_applicant_occupation: {
      type: String
   },
   second_applicant_address: {
      type: String
   },
   second_applicant_relation_with_first_applicant: {
      type: String
   },
   third_applicant_name: {
      type: String
   },
   third_applicant_phone_number: {
      type: Number
   },
   fourth_applicant_name: {
      type: String
   },
   fourth_applicant_phone_number: {
      type: Number
   },
   price_with_tax: {
      type: String
   },
   totalAmount: {
      type: Number,
   },
   extra_facility: {
      type: Array
   },
   demands: {
      type: Array
   },
   pendingDemands: {
      type: Array
   },
   bookingPrice: {
      type: Number
   },
   unitPrice: {
      type: Number
   },
   pending:{
      type: Number
   },
   DemandList:{
      type: Array
   },
   maintenance:{
      type:Array
   }
})

module.exports = mongoose.model('Booking', Booking);