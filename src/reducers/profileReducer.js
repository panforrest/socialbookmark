import constants from '../constants'

var initialState = {
	list: [] //store all profiles in an arraty
}

export default (state = initialState, action) => {

    switch (action.type) {
    	case constatns.PROFILE_RECEIVED:
    	    console.log('PROFILES_RECEIVED: ' + JSON.stringify(action.profiles))

    	    return state

    	default:
    	    return state    
    }



}