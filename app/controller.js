/* jslint node: true */
"use strict";

//This file acts as a routing service on incoming http-requests
//Reqests is handled and appropriate functions are called to manipulate response

var express = require('express');
var router = express.Router();


router.get('/home',function(req, res){
  console.log("Reached home in server");
  res.status(200).json({
    status: 'success',
  });

});



module.exports = router;