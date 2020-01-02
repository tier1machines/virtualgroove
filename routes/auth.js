const router = require('express').Router();

router.post('/register', (req, res, next) => {
  res.json({
    confirmation: 'Register new user'
  });
});

router.post('/login', (req, res, next) => {
  res.json({
    confirmation: 'Log in as an existing user',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  });
});

module.exports = router;
