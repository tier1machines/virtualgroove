const router = require('express').Router();
const axios = require('axios');
const { youtube_api3 } = require('../config/keys');

router.post('/search', (req, res) => {
  const baseURL = 'https://www.googleapis.com/youtube/v3';
  const searchTerm = req.body.searchTerm.replace(/\s/g, '+');
  const queryURL = baseURL + `/search?part=snippet&q=${searchTerm}&order=viewCount&type=video&videoEmbeddable=true&key=${youtube_api3}`

  console.log('Received post req ', req.body);
  axios.get(queryURL)
    .then(response => {
      console.log(response.data);
      res.json(response.data.items)
    })
    .catch(err => console.log(err));
});

module.exports = router;
