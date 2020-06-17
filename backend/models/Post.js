const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	account: {
		type: Schema.Types.ObjectId,
		ref: 'account'
	},
	text: {
		type: String,
		required: true
	},
	firstname: {
		type: String
	},
	likes: [
		{
			account: {
				type: Schema.Types.ObjectId,
				ref: 'account'
			}
		}
	],
	comments: [
		{
			account: {
				type: Schema.Types.ObjectId,
				ref: 'account'
			},
			text: {
				type: String,
				required: true
			},
			firstname: {
				typ: String
			},
			date: {
				type: Date,
				default: Date.now
			}
		}
	],
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Post = mongoose.model('post', PostSchema);
