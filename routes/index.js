var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
res.send("Hello, this is our new startup. PUA MAKE IT RAIN mfk");
//res.render('index', { title: 'Express' });
});

module.exports = router;
