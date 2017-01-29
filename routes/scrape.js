var express = require('express')
var router = express.Router()
var cheerio = require('cheerio')
var superagent = require('superagent')

router.get('/', function(req, res, next){
	var url =req.query.url

	if (url == null){
		res.json({
			confirmation: 'fail',
			message: 'Please enter a valid url'
		})
		return
	}

	res.json({
		confirmation: 'success',
		url: url
	})
})

module.exports = router