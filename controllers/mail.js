
//node mailer import
const nodemailer = require('nodemailer');

//send mail
const send = async(req,res)=>{
    try{


        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bryanthwong1@gmail.com',
            pass: 'Test1234Pokemon'
        }
        });

        const mailOptions = {
        from: 'bryanthwong1@gmail.com',
        to: 'bryanthwong@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
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
                message:"sucessful mail send"
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