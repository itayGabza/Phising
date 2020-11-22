const axios = require('axios');


module.exports = class ImagesDB {

    constructor() {
        this.images = {};
        this.imagesId = [];
        axios.get('https://picsum.photos/v2/list?page=0')
        .then(res => {
            const x = res.data;
            x.map((picture, index) => {
              picture["upVote"] = 0;
              picture["downVote"] = 0;
              this.images[picture.id] = picture;
              this.imagesId.push(picture.id);
            })
          })
          .catch(err => {
            console.log(err);
          })
          console.log("blabla");
    }

    getImages(numOfImages){
        const ids = this.imagesId.slice(0, numOfImages);
        const results = [];
        ids.map((imageId, index) =>{
          results.push(this.images[imageId]);
        })
        console.log(results);
        return results;
    }

    setUpVote(imageId){
      (this.images[imageId])["upVote"] =  (this.images[imageId])["upVote"] + 1;
    }
    setDownVote(imageId){
      (this.images[imageId])["downVote"] =  (this.images[imageId])["downVote"] + 1;
    }

 
  };

  