import constants from '../constants'

var initialState = {
    // all: []
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

    switch(action.type){
    	case constants.BOOKMARKS_RECEIVED:
    	    console.log('BOOKMARKS_RECEIVED: '+JSON.stringify(action.bookmarks))
            const params = action.params
            const keys = Object.keys(params)
            keys.forEach((key, i)=>{
                let value = params[key]  // profile ID number
                updated[value] = action.bookmarks
            })

            // updated['all'] = action.bookmarks

    	    return updated

    default:
        return state
    }

}