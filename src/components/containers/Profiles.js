import React, { Component } from 'react'
import superagent from 'superagent'

class Profiles extends Component {

    componentDidMount(){
    	console.log('componentDidMount: ')

        superagent
        .get('/api/profile')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, response) => {
        	if (err){
        		const msg = err.message || err
        		alert(msg)
        		return
        	}

        	console.log(JSON.stringify(response.body))
        })
    }


	render(){
		return (
            <div>
                Profiles container   
            </div>
		)
	}
}

export default Profiles