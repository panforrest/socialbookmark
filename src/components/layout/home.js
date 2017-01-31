import React, { Component } from 'react'
import { Profiles } from '../containers'

class Home extends Component {
	render(){
		return (
			<div className="row">
			    <div className="col-md-3" style={{background:'#f9f9f9'}}>
                    <Profiles />
			    </div>

			    <div className="col-md-6">
                    Middle
			    </div>

			    <div className="col-md-3" style={{background:'#f9f9f9'}}>
                    Right side
			    </div>
                
            </div>
		)
	}
}

export default Home