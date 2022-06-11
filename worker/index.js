const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function gs(index) {
  if (index < 2) return 1;
  return gs(index - 1) * 2;
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, gs(parseInt(message)));
});
sub.subscribe('insert');
