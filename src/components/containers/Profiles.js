import React, { Component } from 'react'
// import superagent from 'superagent'
import { APIManager } from '../../utils'


class Profiles extends Component {

    componentDidMount(){
    	console.log('componentDidMount: ')

        APIManager.get('/api/profile', null, (err, response) => {
        	console.log(JSON.stringify(response))
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