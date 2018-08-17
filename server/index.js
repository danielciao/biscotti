const path = require('path');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3001;

const ASSET_PATH = path.join(__dirname, '../build');

app.use(cors());
app.use(logger('dev'));
app.use(compression());
app.use(express.static(ASSET_PATH));

// API
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes());

// static page
app.get('/', (req, res) => {
  res.sendFile(path.resolve(ASSET_PATH, 'index.html'));
});

// 404
app.use((req, res) => {
  console.warn(`Invalid URL requested: ${req.originalUrl}`);
  res.status(404).json({ message: 'Not found' });
});

// 500
app.use(({ stack, message }, req, res) => {
  console.error(stack);
  res.status(500).json({ message });
});

// start up
const server = app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Listening on port ${server.address().port}...`);
  }
});
