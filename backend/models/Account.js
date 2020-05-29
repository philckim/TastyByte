const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		unique: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Account = mongoose.model('account', AccountSchema);
