var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
	var url =req.query.url

	res.json({
		confirmation: 'success',
		url: url
	})
})

module.exports = router