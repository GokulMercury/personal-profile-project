// const Profile= require('../models/profile.model');
const nodemailer = require('nodemailer');


const contactController = {
    async send(req,res,next){
        console.log(req.body);

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "5fb007923a5903",
              pass: "dbca4a575a7af0"
            }
          });

          const mailOptions = {
            from: req.body.emailaddress,
            to: 'gokuldasg@gmail.com',
            subject: 'From Contact Form',
            text: `First Name: ${req.body.firstname}, Lastname: ${req.body.lastname}, Phone Number: ${req.body.phonenumber}`
          };

          transport.sendMail(mailOptions, function(error, info){
            if (error) {
                res.json({
                    message:'Mail not sent'
                })
            } else {
                res.json({
                    message:'Hello from contact' + info.response
                })
            }
          });


        res.json({
            message:'Hello from contact'
        })
    },
}



module.exports = contactController;