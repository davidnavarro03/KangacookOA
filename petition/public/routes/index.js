var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const users = await User.findAll();

  res.render('index', { users });
});

router.post('/enter', async function(req, res, next) {
  try {
    await User.create(
      {
        nameuser: req.body.nameuser,
        email: req.body.email,
        comment: req.body.comment,
      }
  )
  res.redirect('/')
  } catch (error) {

  }
});

module.exports = router;
