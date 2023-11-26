require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const apiKey = `${process.env.SENDGRID_API_KEY}`;
console.log("SendGrid key ", apiKey);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'xxx@xxx.com',
  from: 'xxx@xxx.com', // Usar el sender previamente verificado en sendgrid
  subject: 'testtttttttttttttt',
  text: 'testtttttttttttttt',
  html: '<strong>testtttttttttttttt</strong>',
};
//ES6
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();