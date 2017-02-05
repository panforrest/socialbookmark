import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'
 
class Bookmarks extends Component {

    constructor(){
    	super()
    	this.state = {
    		bookmarks: []
    	}
    }

	componentDidMount(){
		// APIManager.get('/api/bookmark', null, (err, response) => {
		// 	if (err){
		// 		return
		// 	}
  
  //           this.props.bookmarksReceived(response.results)


		// 	// console.log('Bookmarks:'+JSON.stringify(response))
		// 	// this.setState({
		// 	// 	bookmarks: response.results
		// 	// })
		// })

		
	}

	componentDidUpdate(){
		console.log('componentDidUpdate: '+JSON.stringify(this.props.selected))

		APIManager.get('/api/bookmark', {profile: this.props.selected.id}, (err, response) => {
			// this.props.selected.id is exactly the same request as: http://localhost:3000/api/bookmark?profile=588d7ea17fdf0302d6249db6
			if (err){
				return
			}
  
            this.props.bookmarksReceived(response.results)
        })

	}

	render() {
		return (
			<div>
			    <h2>Bookmarks</h2>
			    <ol>
			        {
                        this.props.bookmarks.map((bookmark, i) => {
                        	return <li key={bookmark.id}>{bookmark.description}</li>
                        })
			        }
			    </ol>
			</div>

		)
	}


}

const stateToProps = (state) => {
	return {
		selected: state.profile.selected,
		bookmarks: state.bookmark.all
	}
}

const dispatchToProps = (dispatch) => {
	return {
		bookmarksReceived: (bookmarks) => dispatch(actions.bookmarksReceived(bookmarks))
	}
}

export default connect(stateToProps, dispatchToProps)(Bookmarks)