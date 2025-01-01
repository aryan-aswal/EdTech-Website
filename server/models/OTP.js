const mongoose = require('mongoose');
const { mailSender } = require('../utils/mailSender');
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

const otpSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
    },
    otp: {
        type: String, 
        required: true,
    },
    createdAt: {
        type: Date, 
        default: Date.now(),
        required: true,
        expires: 5 * 60,
    }
});

const verification = async(email, otp) => {
    try {
        console.log("Sending Email to ", email);
        const mailResponse = await mailSender(email, "Verification Email from Study Notion", emailTemplate(otp));
        console.log("Email Sent Successfully!", mailResponse);
    } catch (error) {
        console.error("Error occurred while sending mail: ", error.message);
    }
};

otpSchema.pre('save', async function (next) {
    try {
        console.log("Preparing to send email to ", this.email);
        await verification(this.email, this.otp); // Wait for email to be sent before proceeding
        next(); // Proceed with the save operation after email is sent
    } catch (error) {
        console.error("Error in pre-save hook: ", error.message);
        next(error); // Pass the error to the next middleware
    }
});

module.exports = mongoose.model("OTP", otpSchema);
