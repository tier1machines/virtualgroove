const router = require('express').Router();
const axios = require('axios');
const { youtube_api } = require('../config/keys');

router.post('/search', (req, res) => {
  console.log(req.body);
  res.json({
	searchTerm: req.body.searchTerm
  });
});

module.exports = router;
