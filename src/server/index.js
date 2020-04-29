const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mobxReact = require('mobx-react');
const { NODE_ENV, HOSTNAME, PORT } = require('./constants');

const dev = NODE_ENV !== 'production';

// create a next server instance
const nextApp = next({ dev, dir: './src' });
const handle = nextApp.getRequestHandler();

// prevents mobx server memory leak
mobxReact.useStaticRendering(true);

// boots the custom server
async function boostrap() {
  // wait until next is ready
  await nextApp.prepare();
  // open express to have a custom server
  const server = express();
  server.use(cookieParser());
  // bind the next routing handles for the other
  server.use(handle);
  server.listen(PORT, HOSTNAME, error => {
    if (error) throw error;
    console.log(`> Ready on http://${HOSTNAME}:${PORT}`); // eslint-disable-line no-console
  });
}

// prepare nextApp, start express and config… then
boostrap().catch(exception => {
  console.error(exception.stack); // eslint-disable-line no-console
  process.exit(1);
});
