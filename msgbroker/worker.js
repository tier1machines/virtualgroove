const amqp = require('amqplib/callback_api');
const CONN_URL = require('../config/urls').cloudamqp;


module.exports = consumer = () => {
  console.log('Awaiting recos...');
  amqp.connect(CONN_URL, function(err, conn) {
	if (err) {
	  console.log('Error: ', err);
	}
	conn.createChannel(function(err, ch) {
	  ch.consume('t-recs', function(msg) {
		console.log(msg.content.toString());
	  }, { noAck: true });
	});
  });
};
