import constants from '../constants'

export default {
    currentUserReceived: (profile) => {
        return {
            type: constants.CURRENT_USER_RECEIVED,
            profile: profile
        }
    },

    bookmarksReceived: (bookmarks) => {
        // console.log('TEST: '+JSON.stringify(bookmarks))
        return {
            type: constants.BOOKMARKS_RECEIVED,
            bookmarks: bookmarks
        }
    },

    profilesReceived: (profiles) => {
    	return {
    		type: constants.PROFILES_RECEIVED,
    		profiles: profiles
    	}
    },

    profileCreated: (profile) => {
    	return {
    		type: constants.PROFILE_CREATED,
    		profile: profile
    	}
    }
}