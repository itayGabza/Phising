/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require('body-parser');

const { clientOrigins, serverPort } = require("./config/env.dev");
const { messagesRouter } = require("./messages/messages.router");

/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

app.get('/ping', function (req, res) {
  res.send('pong')
});


/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);

app.post('/image/upvote', function(req, res){
  console.log(req.body);
  const imageId = req.body.imageId;
  console.log(imageId);
  res.status(200).send("success")
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});


/**
 * Server Activation
 */

app.listen(serverPort, () =>
  console.log(`API Server listening on port ${serverPort}`)
);
