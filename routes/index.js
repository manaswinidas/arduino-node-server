var express = require('express');
var router = express.Router();
var serialjs = require('serialport-js');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = null;

serialjs.open(
    '/dev/ttyACM0',
    function (p) {
    	port = p;
    },
    ''
);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/off', function(req, res, next) {
  if(port != null) {
    a =  '0';
  	port.send(a);
  	res.send(JSON.stringify({
  		success : true,
  		message: "OK"
  	}));
  } else {
  	res.send(JSON.stringify({
  		success : false,
  		message: "No serial port"
  	}));
  }

});

router.get('/on', function(req, res, next) {
if(port != null) {
  	port.send("1");
  	res.send(JSON.stringify({
  		success : true,
  		message: "OK"
  	}));
  } else {
  	res.send(JSON.stringify({
  		success : false,
  		message: "No serial port"
  	}));
  }
});

module.exports = router;
