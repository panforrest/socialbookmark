import React, { Component } from 'react'
import { APIManager } from '../../utils'
 
class Bookmarks extends Component {

	componentDidMount(){
		APIManager.get('/api/bookmark', null, (err, response) => {
			if (err){
				return
			}

			console.log('Bookmarks:'+JSON.stringify(response))
		})

		
	}

	render() {
		return (
			<div>
			    This is Bookmarks Container!

			</div>

		)
	}


}

export default Bookmarks