import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Admin extends Component {
	render(){
		return (
            <div>
                Admin Component
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