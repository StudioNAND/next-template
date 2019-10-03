/* eslint-disable */
const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser')
const mobxReact = require('mobx-react');
const { parse } = require('url');
const routes = require('./routes');
const {
  DEFAULT_HOSTNAME,
  DEFAULT_PORT,
} = require('./constants');
const dotenv = require('dotenv');

dotenv.config();

const {
  NODE_ENV='development',
  HOSTNAME=DEFAULT_HOSTNAME,
  PORT=DEFAULT_PORT
} = process.env;

const dev = NODE_ENV !== 'production'

// create a next server instance
const nextApp = next({ dev: true, dir: './src' });

// use `next-routes` configuration and bind the next request handler to it
const nextRouteHandle = routes.getRequestHandler(nextApp);

// prevents mobx server memory leak
mobxReact.useStaticRendering(true);

// boots the custom server
async function boostrap(){
  // wait until next is ready
  await nextApp.prepare();
  // open express to have a custom server
  const server = express();
  server.use(cookieParser());
  // bind the next routing handles for the other
  server.use(nextRouteHandle);
  server.listen(PORT, HOSTNAME, error => {
    if (error) throw error;
    console.log(`> Ready on http://${HOSTNAME}:${PORT}`); // eslint-disable-line no-console
  });
}

// prepare nextApp, start express and config… then
boostrap()
  .catch(exception => {
    console.error(exception.stack); // eslint-disable-line no-console
    process.exit(1);
  });