import superagent from 'superagent'

export default {

    get: (endpoint, params, callback) => {
    
	    superagent
        .get(endpoint)
        .query(params)
        .set('Accept', 'application/json')
        .end((err, response) => {
        	if (err){
        		// const msg = err.message || err
        		// alert(msg)
        		callback(err, null)
        		return
        	}

        	// console.log(JSON.stringify(response.body))
        	callback(null, response.body)
        })
	},

    post: (endpoint, params, callback) => {
        superagent
        .post(endpoint)
        .send(params)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err){
                callback(err, null)
                return
            }

            callback(null, response.body)
        })        
    }

}