const router = require('express').Router();
const { publishToQueue } = require('../msgbroker/MQService');

router.post('/msg', async (req, res, next) => {
  let { queueName, payload } = req.body;

  await publishToQueue(queueName, payload);
  res.statusCode = 200;
  res.data = { 'message-sent': true };
  res.json({
	"message-sent": true,
	queue: queueName,
	message: payload
  });

});

module.exports = router;
