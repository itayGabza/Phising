/**
 * Required External Modules
 */


const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const { clientOrigins, serverPort } = require("./config/env.dev");
const { messagesRouter } = require("./messages/messages.router");
var ImagesDB = require("./ImagesDB.js");

const path = require('path');



/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();


app.get('/api/ping', function (req, res) {
  res.send('pong')
});

// Setting up a route for our API
app.get('/api/', (req, res) => {
    return res.status(200).json({
        status: "success"
    })
});

/**
 *  App Configuration
 */

const imagesDB = new ImagesDB();

app.use(express.static('public'));
app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use("/api", apiRouter);
app.use(fileUpload());


apiRouter.use("/api/messages", messagesRouter);


app.get('/api/images', function(req, res){
  const num = req.query.num;
  res.status(200).send(imagesDB.getImages(num));

});

app.post('/api/image/upvote', function(req, res){
  const imageId = req.body.imageId;
  imagesDB.setUpVote(imageId);
  res.status(200).send("success");
  console.log("supp");
});

app.post('/api/image/downvote', function(req, res){
  const imageId = req.body.imageId;
  imagesDB.setDownVote(imageId);
  res.status(200).send("success");
});

app.post('/api/image/newimage', function(req, res){
  const image = req.body.formData;
  console.log("Helllo");
  if(req.body !=null){
    res.status(200).send("sucess");
    console.log("Helllo2");
    console.log(req.body.formData);
  }else{
    res.status(200).send("not sucess");
    console.log("Helllo3");
  }
  
});

app.post('/api/upload', (req, res) => {
  if (!req.files) {
      return res.status(500).send({ msg: "file is not found" })
  }
      // accessing the file
  const myFile = req.files.file;
  //  mv() method places the file inside public directory
  myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
      if (err) {
          console.log(err)
          return res.status(500).send({ msg: "Error occured" });
      }
      // returing the response with file path and name
      return res.send({name: myFile.name, path: `/${myFile.name}`});
  });
})

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
