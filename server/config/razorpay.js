const Razorpay = require('razorpay');
require('dotenv').config();

console.log(process.env.RAZORPAY_KEY, process.env.RAZORPAY_SECRET)
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
})

module.exports = { instance };