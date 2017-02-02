import constants from '../constants'

export default {

    profilesReceived: (profiles) => {
    	return {
    		type: constants.PROFILES_RECEIVED,
    		profiles: profiles
    	}
    }
}