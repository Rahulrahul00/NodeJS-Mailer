const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
 
   service : "gmail",

	host: "smtp.gmail.com",
	port: 587,
	secure: false, // true for port 465, false for other ports
	auth: {
	  user: "rahulcshaji007@gmail.com",
	  pass: "iepsmhkrptvtflzi",
	},
  });

  const mailOption = {
    from: {
		name : 'Rahul',
		address : 'rahulcshaji007@gmail.com',

	}, // sender address
    to: 'torahulcshaji007@gmail.com', // list of receivers
    subject: "Hello ✔", // Subject line
    text: "This testing for  nodemailer", // plain text body
    html: "<b>Submitted successfully</b>", // html body
  }

  const sentInfo = async(transporter, mailOption)=>{
	try{
		await transporter.sendMail(mailOption)

		console.log("Mail Sent Successfully");
	}catch(error){
		console.error("Mail sent rejected",error);
	}
  }

  sentInfo(transporter,mailOption);