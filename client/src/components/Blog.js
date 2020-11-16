import React, { useEffect, useState } from "react";
import CardExampleCard from "../components/CardExampleCard";
import LoaderIcon from "../components/LoaderIcon";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Grid } from 'semantic-ui-react'


const Blog = () => {

  const [pictures, setPictures] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list?page=0&limit=10')
      .then(res => {
        setPictures(res.data.slice(0, 9));
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true)
      })
  }, []);

  if (load) {
    return (
      
      <Grid columns={3} padded>
        {error ? <li>{error.message}</li>
          :
          pictures.map((picture, index) =>
            <Grid.Column key={index}>
              <CardExampleCard logo={picture.download_url} id={picture.id} author={picture.author} upVotes={picture.upVotes} downVotes={picture.downVotes} />
            </Grid.Column>
          )}
      </Grid>);
  } else {
    return (
      <div>
        {LoaderIcon}
      </div>
    );
  }

};

export default Blog;
