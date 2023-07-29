const axios = require('axios');
const twilio = require('twilio');

module.exports.handler = async (event) => {
  const { 
    API_KEY,  
    Twilio_Account_SID, 
    Twilio_Auth_Token,
    Twilio_Phone_Number,
    Personal_Nomber } = process.env;

  const url =  `"https://api.nasa.gov/planetary/apod?api_key="+${API_KEY}`;
  const fetchdata = await axios.get(url);
  const getdata = fetchdata.data;
  
  const body = ` --${getdata.date}-- 
  Good Morning! 
  Here is update from today apod
  ----
  "${getdata.title}"
  ----
  ${getdata.explanation}
   `;

  const client = twilio(Twilio_Account_SID, Twilio_Auth_Token)
  await client.messages.create({
    body,
    mediaUrl: [getdata.url],
    from: Twilio_Phone_Number,
    to: Personal_Nomber,
  })
};