require('dotenv').config();
const twilio = require('twilio');
const accountSid = process.env.TWILIO_USER_ID;
const authToken = process.env.TWILIO_API_TOKEN;

module.exports = new twilio.Twilio(accountSid, authToken);