const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Profile = require('../../models/Profile');
const Account = require('../../models/Account');

//Get api/profile/me
//test get current users profile
//@acess public

router.get('/myself', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ account: req.account.id }).populate('account', [ 'firstname' ]);
		if (!profile) {
			return res.status(400).json({ msg: 'There is no profile for this user' });
		}
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//Get Post api/profile
//desc Create or update user profile
//@acess public

router.post('/', [ auth, check('status', 'Status is required').not().isEmpty() ], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { status } = req.body;

	//build profile object
	const profileFields = {};
	profileFields.account = req.account.id;
	if (status) profileFields.status = status;

	try {
		let profile = await Profile.findOne({ account: req.account.id });

		if (profile) {
			//Update
			profile = await Profile.findOneAndUpdate(
				{ account: req.account.id },
				{ $set: profileFields },
				{ new: true }
			);
			return res.json(profile);
		}

		//Create
		profile = new Profile(profileFields);

		await profile.save();
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//Get Post api/profile
//desc Get all profiles
//@acess public

router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('account', [ 'firstname' ]);
		res.json(profiles);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//Get Post api/profile/user/:account_id
//desc Get profile by user id
//@acess public

router.get('/account/:accound_id', async (req, res) => {
	try {
		const profile = await Profile.findOne({ account: req.params.account_id }).populate('account', [ 'firstname' ]);
		if (!profile) return res.status(400).json({ msg: 'Profile Not Found' });

		res.json(profiles);
	} catch (err) {
		console.error(err.message);
		if (err.kind == 'ObjectId') {
			return res.status(400).json({ msg: 'Profile Not Found' });
		}
		res.status(500).send('Server Error');
	}
});

//Get Delete api/profile
//desc Delete profile, user and posts
//@acess private

router.delete('/', auth, async (req, res) => {
	try {
		//@todo - remove users posts
		//remove profile
		await Profile.findOneAndRemove({ account: req.account.id });
		// Remove account
		await Account.findOneAndRemove({ _id: req.account.id });

		res.json({ msg: 'Account Deleted' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
