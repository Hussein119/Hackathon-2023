const nodemailer = require('nodemailer');

const UserLogin = require('../models/userModel');

exports.login = async (req, res) => {
  try {
    const check = await UserLogin.findOne({ email: req.body.email });
    if (check.password === req.body.password) {
      res.send('Successfully logged in');
      res.send(req.body._id);
    } else {
      res.send('wrong password');
    }
  } catch (err) {
    res.status(400).json({
      status: 'bad request',
    });
  }
};
exports.sendTempCode = async (req, res) => {
  try {
    let transporter = nodemailer.createTransporter({
      service: '',
      auth: {
        user: 'hussein.abdalkader96@gmail.com',
        pass: '7825441HusseinAbdalkader@@11900',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let mailOptions = {
      from: 'hussein.abdalkader96@gmail.com',
      to: req.body.email,
      subject: 'Temp Code to access your account',
      text: 'text from express.js',
    };

    transporter.sendMail(mailOptions, (err, success) => {
      if (err) console.log(err);
      else console.log('Email sent successfully');
    });
  } catch (err) {
    res.status(400).json({
      status: 'bad request',
    });
  }
};

exports.editpassword = async (req, res) => {
  res.send('Sssssss');
};
