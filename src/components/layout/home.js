import React, { Component } from 'react'

class Home extends Component {
	render(){
		return (
			<div className="row">
			    <div className="col-md-3">
                    Left Side
			    </div>

			    <div className="col-md-6">
                    Middle
			    </div>

			    <div className="col-md-3">
                    Right side
			    </div>
                
            </div>
		)
	}
}

export default Home