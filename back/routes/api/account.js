const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

const { check, validationResult } = require('express-validator');

//Bring in account model
const Account = require('../../models/Account');

// @route   POST api/account
// @desc    Creates new account
// @access  Public
router.post(
  '/',
  [
    //checking account fields
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let account = await Account.findOne({ email });

      if (account) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Account already exists' }] });
      }

      account = new Account({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      account.password = await bcrypt.hash(password, salt);

      await account.save();

      const payload = {
        account: {
          id: account.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Account route'));

module.exports = router;
