//dotenv import
require('dotenv').config();

//node mailer import
const nodemailer = require('nodemailer');

//send mail
const send = async(req,res)=>{
    try{

        const email = req.body.email
        const subject = req.body.subject
        const content = req.body.content

        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bryanthwong1@gmail.com',
            pass: process.env.EMAILPASSWORD
        }
        });

        const mailOptions = {
        from: 'bryanthwong1@gmail.com',
        to: 'bryanthwong@gmail.com',
        subject: `${subject}`,
        text: `Email:${email} message: ${content}`
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            return res.status(500).json({
            status:500,
            message:'An error occured in mailing'
            })
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).json({
                status:200,
                message:"sucessful mail sent"
            })
        }
        });
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:500,
            message:'An error occured'
        })
        }
    }

module.exports ={
    send,
}