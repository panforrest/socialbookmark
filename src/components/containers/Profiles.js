import React, { Component } from 'react'
// import superagent from 'superagent'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { connect } from 'react-redux'


class Profiles extends Component {

	constructor(){
		super()
		this.state = {
			profiles:[]
		}
	}

    componentDidMount(){
    	// console.log('componentDidMount: ')

        APIManager.get('/api/profile', null, (err, response) => {
        	console.log(JSON.stringify(response))
        	const results = response.results

            this.props.profilesReceived(results)

        	// this.setState({
        	// 	profiles: results
        	// })
        })
    }


	render(){
        const list = this.state.profiles.map((profile, i) => {
        	return (
                <li key={profile.id}>{ profile.firstName }</li>
        	)
        }) 

		return (
            <div>
                <h2>Profile</h2>
                <ol>
                    {list}
                </ol> 
            </div>
		)
	}
}

const stateToProps = (state) => {
    return {
        profiles: state.profile.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        profilesReceived: (profiles) => dispatch(actions.profilesReceived(profiles))
    }
}


export default connect(stateToProps, dispatchToProps)(Profiles)