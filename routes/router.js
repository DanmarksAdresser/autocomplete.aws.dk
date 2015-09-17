var express = require('express');
var request = require('request');
var async = require('async');
var moment= require("moment");
var router = express.Router();

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/home', function(req, res) {
  res.render('home');
});

router.get('/guide', function(req, res) {
  res.render('guide');
});

router.get('/wfs', function(req, res) {
  res.render('wfs');
});

router.get('/wmts', function(req, res) {
  res.render('wmts');
});

router.get('/om', function(req, res) {
	res.render('om');
});

module.exports = router;
