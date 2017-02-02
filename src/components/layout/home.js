import React, { Component } from 'react'
import { Profiles, Signup } from '../containers'

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
					<Signup />

				</div>

			</div>
		)
	}
}

export default Home