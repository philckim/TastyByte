const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  try {
    res.send('Recipe route');
  } catch {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// app.get('/api/recipe', cors(), (req, res) => {
//   let query = req.params.query;
//   Recipe.find({ request: query }, function (err, result) {
//     if (err) throw err;
//     if (result) {
//       res.json(result);
//     } else res.send(JSON.stringify({ error: 'Error' }));
//   }).select({
//     id: 1,
//     name: 1,
//     author: 1,
//     description: 1,
//     instructions: 1,
//     ingredients: 1,
//     photos: 1,
//     tags: 1,
//   });
// });

module.exports = router;
