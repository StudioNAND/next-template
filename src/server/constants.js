const dotenv = require('dotenv');

const HOSTNAME = '0.0.0.0';
const DEFAULT_PORT = 9999;

dotenv.config();

const {
  NODE_ENV = 'development',
  // HOSTNAME = DEFAULT_HOSTNAME,
  PORT = DEFAULT_PORT,
} = process.env;

module.exports = {
  NODE_ENV,
  PORT,
  HOSTNAME,
};
