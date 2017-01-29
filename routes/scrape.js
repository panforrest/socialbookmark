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

	superagent
	.get(url)
	.query(null)
	.set('Accept', 'text/html')
	.end(function(err, response){
        if (err){
        	res.json({
        		confirmation: 'fail',
        		message: err
        	})

        	return
        }

        // res.send(response.text)
        var html = response.text

        var props = ['og:title', 'og:description', 'og:image']
        var metaData = {}
        $ = cheerio.load(html)
        $('meta').each(function(i, meta){
        	if (meta.attribs != null){
        		var attribs = meta.attribs
        		if (attribs.property != null){
        			var prop = attribs.property
        			if (props.indexOf(prop) != -1){
        				var key = prop.replace('og:', '')
        				metaData[key] = attribs.content
        			}
        		}
        	}
        }) 

        metaData['url'] = url
        res.json({
        	confirmation: 'success',
        	tags: metaData
        })

	})

	// res.json({
	// 	confirmation: 'success',
	// 	url: url
	// })
})

module.exports = router