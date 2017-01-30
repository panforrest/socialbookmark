var mongoose = require('mongoose')

var BookmarkSchema = new mongoose.Schema({
    profile: {type:String, default:''},   //ID of the profile who posted the bookmark
    url: {type:String, trim:true, Tdefault:''},
    title: {type:String, trim:true, default:''},
    description: {type:String, trim:true, default:''},
    image: {type:String, default:''},
    timestamp: {type:String, default:Date.now}

})

BookmarkSchema.methods.summary = function(){
	var summary = {
		id: this._id.toString(),
		profile: this.profile,
		url: this.url,
		description: this.description,
		image: this.image,
		timestamp: this.timestamp

	}

	return summary
}

module.exports = mongoose.model('BookmarkSchema', BookmarkSchema)