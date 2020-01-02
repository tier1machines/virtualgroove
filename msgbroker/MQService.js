const amqp = require('amqplib/callback_api');
const CONN_URL = require('../config/urls').cloudamqp;

let channel = null;

amqp.connect(CONN_URL, function(err, conn) {
  conn.createChannel(function(err, newChannel) {
	channel = newChannel;
  });
});

const publishToQueue = async (queueName, data) => {
  channel.sendToQueue(queueName, new Buffer.from(data));
}


module.exports = { publishToQueue };

process.on('exit', code => {
  channel.close();
  console.log('Closing rabbitmq channel');
});
