const axios = require('axios');
const twilio = require('twilio');

//////////////////////////////// firebase integration
const admin = require("firebase-admin");
const firebaseAccount = require('path/to/secureAccountkey.json');
////////////////////////////////

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

   // integrating firebase

  admin.initializeApp({
    credential: admin.credential.cert(firebaseAccount),
  });
  
  // generate FCM token for my numbers
  
  admin.auth().createCustomToken(phoneNumber)
  .then((customToken) => {
    console.log('FCM token for phone number:', customToken);
  })
  .catch((error) => {
    console.error('Error generating FCM token:', error);
  });


  //// Old messaging tech stuff ////////////////////////////////////
  //// deprecated
  // const client = twilio(Twilio_Account_SID, Twilio_Auth_Token)
  // await client.messages.create({
  //   body,
  //   mediaUrl: [getdata.url],
  //   from: Twilio_Phone_Number,
  //   to: Personal_Nomber,
  // })
};