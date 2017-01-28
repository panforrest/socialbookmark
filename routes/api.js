var express = require('express')
var router = express.Router()
var controllers = require('../controllers')

router.get('/:resource', function(req, res, next){

	var resource = req.params.resource

	var controller = controllers[resource]
    if (controller == null){
        res.json({
        	confirmation: 'fail',
        	message: 'Invalid Resource'
        })
        return
    }

    controller.find(req.query)
    .then(function(entities){
    	res.json({
    		confirmation: 'success',
    		results: entities
    	})
    })
    .catch(function(err){
    	res.json({
    		confirmation: 'fail',
    		message: err
    	})
    })

})

module.exports = router;