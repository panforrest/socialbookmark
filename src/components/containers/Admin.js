import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'
import { Signup } from '../presentation'

class Admin extends Component {

    componentDidMount(){
        //check the current user
        APIManager.get('/account/currentuser', null, (err, response) => {
            if (err) {
                alert(err)
                return
            }
            
            if (response.profile == null)
                return

            //user is logged in:
            console.log('Current User: '+JSON.stringify(response))
            this.props.currentUserReceived(response.profile)
        })
    }


	render(){
		return (
            <div>
                {(this.props.currentUser != null) ? <h2>Welcome {this.props.currentUser.firstName}</h2>:
                    <Signup />
                }       
            </div>
		)
	}

}

const stateToProps = (state) => {
    return {
        profiles: state.profile.list,
        currentUser: state.account.currentUser
    }
}

const dispatchToProps = (dispatch) => {
    return {
        profileCreated: (profile) => dispatch(actions.profileCreated(profile)),
        currentUserReceived: (profile) => dispatch(actions.currentUserReceived(profile))
    }
}

export default connect(stateToProps, dispatchToProps)(Admin)