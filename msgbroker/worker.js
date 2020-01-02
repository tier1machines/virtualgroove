const amqp = require('amqplib/callback_api');
const axios = require('axios');
const CONN_URL = require('../config/urls').cloudamqp;
const { youtube_api3 } = require('../config/keys');


module.exports = consumer = io => {
  console.log('Awaiting recos...');
  amqp.connect(CONN_URL, function(err, conn) {
	if (err) {
	  console.log('Error: ', err);
	}
	conn.createChannel(function(err, ch) {
	  ch.consume('t-recs', function(msg) {
		// Call YouTube API with recommended track title returned from message queue
		// TODO: Extract YouTube API call function to standalone module
		const baseURL = 'https://www.googleapis.com/youtube/v3';
		const searchTerm = msg.content.toString().replace(/\s/g, '+');
		const queryURL = baseURL + `/search?part=snippet&q=${searchTerm}&order=viewCount&type=video&videoEmbeddable=true&key=${youtube_api3}`

		axios.get(queryURL)
			 .then( response => {
			   let reco = response.data.items[0];
			   console.log(reco);
			   io.sockets.emit('reco', reco);
			 })
			 .catch( err => console.log(err));

	  }, { noAck: true });
	});
  });
};
