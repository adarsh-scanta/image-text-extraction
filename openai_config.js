const { OpenAI } = require("openai");

require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

module.exports = { openai };
