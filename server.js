const express = require("express");
const bodyParser = require("body-parser");
const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')
const app = express();

// serve your css as static
app.use(express.static(__dirname));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

// initialize nodemailer
var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: 'abineshselvam1993@gmail.com',
            pass: 'ganf eqmn wnbw jxxq'
        }
    }
);

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/submit/contact/form", (req, res) => {
    var subName = req.body.name
    var subEmail = req.body.email;
    var subMessage = req.body.email;
    var subPhone = req.body.phone;

    var mailOptions = {
        from: subEmail,
        to: 'abineshselvam1993@gmail.com', // list of receivers
        subject: subName+' Intrested To Connect with Ruby international LLC!',
        template: 'email',
        context:{
            name: subName,
            message: subMessage,
            phone: subPhone
        }
    };

    // trigger the sending of the E-mail
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            return res.send("Error");
        }
        console.log('Message sent: ' + info.response);
        res.send("Success");
    });
});

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});