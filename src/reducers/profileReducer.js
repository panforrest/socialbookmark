import constants from '../constants'

var initialState = {
	list: [] //store all profiles in an arraty
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

    switch (action.type) {
    	case constants.PROFILES_RECEIVED:
    	    console.log('PROFILES_RECEIVED: ' + JSON.stringify(action.profiles))
    	    updated['list'] = action.profiles

    	    return updated

    	default:
    	    return state    
    }



}