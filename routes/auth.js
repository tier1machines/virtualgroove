const router = require('express').Router();

router.get('/register', (req, res, next) => {
  res.json({
	confirmation: 'Register new user'
  });
});

router.get('/login', (req, res, next) => {
  res.json({
	confirmation: 'Log in as an existing user'
  });
});

module.exports = router;
