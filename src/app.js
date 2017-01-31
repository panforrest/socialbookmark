import React, { component } from 'react'
import reactDom from 'react-dom'

class App extends Component {
	render(){
		return (
			<div>
                This is the React App.
            </div>
		)
	}
}

ReactDom.render(<App />, document.getElement('root'))