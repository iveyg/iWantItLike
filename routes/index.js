var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

/* GET home page. */
router.get('/', function(req, res, next) {
  
//res.send("Hello, this is our new startup. PUA MAKE IT RAIN mfk");
res.render('index');
//res.sendFile('../views/front.html', {root: __dirname});

});


router.post('/contact', function(req, res, next) {
	var 
		mailOpts,
		smtpTrans;



	//Setup Nodemailer transport
  	smtpTrans = nodemailer.createTransport(
  		smtpTransport({
	      service: 'gmail',
	      auth: {
	          user: "pua.makeitrain@gmail.com",
	          pass: "minddonpua" 
	      }
	  })
  	);

	//Mail options
	mailOpts = {
	    from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
	    to: 'ivgorodko@gmail.com',
	    subject: 'Website contact form',
	    text: 'Zhopniy Taran Priem ' + 
	    	req.body.name + ' ' + req.body.email + ' ' + req.body.phone
	};

	smtpTrans.sendMail(mailOpts, function (error, response) {
	    //Email not sent
	    if (error) {
	        // res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
	    	res.redirect('/');
	    }
	    //Yay!! Email sent
	    else {
	    	res.redirect('/');
	        // res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
	    }
	});

});

module.exports = router;
