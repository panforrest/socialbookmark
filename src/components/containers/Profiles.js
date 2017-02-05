import React, { Component } from 'react'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { connect } from 'react-redux'

class Profiles extends Component {
    constructor(){
        super()
        this.state = {
            profiles: []
        }
    }

    componentDidMount(){
        APIManager.get('/api/profile', null, (err, response) => {
            // console.log(JSON.stringify(response))
            const results = response.results

            this.props.profilesReceived(results)
        })
    }

    render(){
        const list = this.props.profiles.map((profile, i) => {
            let name = null
            if (this.props.selected == null)
                name = <span>{ profile.firstName }</span> 
            else if (this.props.selected.id == profile.id) 
                name = <strong style={{color:'red'}}>{ profile.firstName }</strong>
            else
                name = <span>{ profile.firstName }</span>

            return (
                <li key={profile.id}>{name}</li>
            ) 
        })

        return (
            <div>
                <h2>Profiles</h2>
                <ol>
                    {list}
                </ol>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        profiles: state.profile.list,
        selected: state.profile.selected
    }
}

const dispatchToProps = (dispatch) => {
    return {
        profilesReceived: (profiles) => dispatch(actions.profilesReceived(profiles))
    }
}


export default connect(stateToProps, dispatchToProps)(Profiles)




