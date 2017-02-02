import React, { Component } from 'react'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { connect } from 'react-redux'

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            visitor: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            }
        }
    }

    updateVisitor(event){
        let updated = Object.assign({}, this.state.visitor)
        updated[event.target.id] = event.target.value
        this.setState({
            visitor: updated
        })
    }

    register(event){
        event.preventDefault()
        // console.log(JSON.stringify(this.state.visitor))

        APIManager.post('/account/register', this.state.visitor, (err, response) => {
            if (err){
                let msg = err.message || err
                alert(msg)
                return
            }

            console.log('REGISTER: '+JSON.stringify(response))
            this.props.profileCreated(response.profile)
        })
    }

    render(){
        const greeting = (this.props.currentUser == null) ? null : <h2>Welcome {this.props.currentUser.firstName}</h2>


        return (
            <div>
                { greeting }
                <h2>Sign Up</h2>
                <input onChange={this.updateVisitor.bind(this)} type="text" id="firstName" placeholder="First Name" /><br />
                <input onChange={this.updateVisitor.bind(this)} type="text" id="lastName" placeholder="Last Name" /><br />
                <input onChange={this.updateVisitor.bind(this)} type="text" id="email" placeholder="Email" /><br />
                <input onChange={this.updateVisitor.bind(this)} type="text" id="password" placeholder="Password" /><br />
                <button onClick={this.register.bind(this)}>Join</button>
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
        profileCreated: (profile) => dispatch(actions.profileCreated(profile))
    }
}

export default connect(stateToProps, dispatchToProps)(Signup)


