const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost/tastyebytedb', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to Mongo'))
	.catch((err) => console.err('Could not connect to Mongo', err));

const accountSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String
});

const Account = mongoose.model('Account', accountSchema);

async function createAccount() {
	const account1 = new Account({
		username: 'Pancake',
		email: 'pie@cake.com',
		password: 'p@ssw0rd'
	});
	let result = await account1.save();
	console.log('account1 - ' + result);
}
createAccount();
