const router = require('express').Router();
const axios = require('axios');
const { youtube_api3 } = require('../config/keys');
const { publishToQueue } = require('../msgbroker/MQService');

router.post('/search', (req, res) => {

  // Dispatch message to RabbitMQ service
  const queueName = 'virtualgroove-app';
  publishToQueue(queueName, req.body.searchTerm);

  const baseURL = 'https://www.googleapis.com/youtube/v3';
  const searchTerm = req.body.searchTerm.replace(/\s/g, '+');
  const queryURL = baseURL + `/search?part=snippet&q=${searchTerm}&order=viewCount&type=video&videoEmbeddable=true&key=${youtube_api3}`

  axios.get(queryURL)
    .then(response => {
      res.json(response.data.items)
    })
    .catch(err => console.log(err));



});

module.exports = router;
