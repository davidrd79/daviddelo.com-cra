const express = require('express');
const path = require('path');

const createApp = () => {
  const app = express();

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  return app;
};

const listener = createApp().listen(80, () => {
  const { host, port } = listener.address();
  console.log('Server listening at http://%s:%s', host, port);  // eslint-disable-line
});
