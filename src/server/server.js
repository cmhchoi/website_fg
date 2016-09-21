const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const router = require('./routes');
const staticRoutes = require('./routes/static');
require("node-jsx").install();

const app = express();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

app
  .use(cors({
    origin: '*',
    methods: ['GET, POST, OPTIONS'],
    allowHeaders: 'content-type, accept',
    credentials: true,
    maxAge: 10,
  }))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(`${__dirname}/../client`))
  .use('/', staticRoutes)
  .engine('html', require('ejs').renderFile)
  .set('views', `${__dirname}/../client`);
  
app.listen(port, () => {
  console.log(`Connected to ${host}:${port}`, staticRoutes);
});