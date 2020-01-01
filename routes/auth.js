const router = require('express').Router();

router.get('/register', (req, res, next) => {
  res.json({
    confirmation: 'Register new user'
  });
});

router.post('/login', (req, res, next) => {
  console.log(`this is get login ${req.body}`)
  res.json({
    confirmation: 'Log in as an existing user'
  });
});

module.exports = router;
