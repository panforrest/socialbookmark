var Bookmark = require('../models/Bookmark')
var Promise = require('bluebird')
var superagent = require('superagent')
var utils = require('../utils')

module.exports = {

	find: function(params, isRaw){
		return new Promise(function(resolve, reject){
			Bookmark.find(params, function(err, bookmarks){
				if (err){
					reject(err)
					return
				}

				if (isRaw){
					resolve(bookmarks)
					return
				}

				var summaries = []
				bookmarks.forEach(function(bookmark){
					summaries.push(bookmark.summary())
				})

				resolve(summaries)

			})
		})
	},

	findById: function(id){
		return new Promise(function(resolve, reject){
			Bookmark.findById(id, function(err, bookmark){
				if (err){
					reject(err)
					return
				}

				resolve(bookmark.summary())
			})
		})
	},

	create: function(params){




    	return new Promise(function(resolve, reject){

		    superagent
			.get(params.url)
			.query(null)
			.set('Accept', 'text/html')
			.end(function(err, response){
		        if (err){
                    reject(err)

		        	return
		        }

		        // res.send(response.text)
		        var html = response.text
		        var metaData = utils.Scraper.scrape(html, ['og:title', 'og:description', 'og:image', 'og:url'])

	            Bookmark.create(metaData, function(err, bookmark){
	    			if (err){
	    				reject(err)
	    				return
	    			}

	    			resolve(bookmark.summary())
	    		})

		        // var props = ['og:title', 'og:description', 'og:image']
		        // var metaData = {}
		        // $ = cheerio.load(html)
		        // $('meta').each(function(i, meta){
		        // 	if (meta.attribs != null){
		        // 		var attribs = meta.attribs
		        // 		if (attribs.property != null){
		        // 			var prop = attribs.property
		        // 			if (props.indexOf(prop) != -1){
		        // 				var key = prop.replace('og:', '')
		        // 				metaData[key] = attribs.content
		        // 			}
		        // 		}
		        // 	}
		        // }) 

		        // metaData['url'] = url
		        // res.json({
		        // 	confirmation: 'success',
		        // 	tags: metaData
		        // })

			})

    		// Bookmark.create(params, function(err, bookmark){
    		// 	if (err){
    		// 		reject(err)
    		// 		return
    		// 	}

    		// 	resolve(bookmark)
    		// })
    	})
    }
}