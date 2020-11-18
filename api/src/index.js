/**
 * Required External Modules
 */


const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require('body-parser');

const { clientOrigins, serverPort } = require("./config/env.dev");
const { messagesRouter } = require("./messages/messages.router");
var ImagesDB = require("./ImagesDB.js");


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

const imagesDB = new ImagesDB();


app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use("/api", apiRouter);


apiRouter.use("/messages", messagesRouter);


app.get('/images', function(req, res){
  const num = req.query.num;
  res.status(200).send(imagesDB.getImages(num));

});

app.post('/image/upvote', function(req, res){
  const imageId = req.body.imageId;
  imagesDB.setUpVote(imageId);
  res.status(200).send("success");
});

app.post('/image/downvote', function(req, res){
  const imageId = req.body.imageId;
  imagesDB.setDownVote(imageId);
  res.status(200).send("success");
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
