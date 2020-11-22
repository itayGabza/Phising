import React from "react";
import Blog from "../components/Blog";
import Openner from "../components/openner";
import 'bootstrap/dist/css/bootstrap.min.css';
import TheTeam from "../components/TheTeam";
import ImageUpload from "../components/ImageUpload";


import { Container, Divider } from 'semantic-ui-react'


const Home = () => {
  return (
    <div>
      <Openner />
      <Divider />
      <Container textAlign='center'>
        <Blog />
      </Container>
      <Divider />
      <Container textAlign='center'>
        <ImageUpload />
        <h1>File Upload</h1>
      </Container>
      <Divider />
      <Container textAlign='center'>
        <TheTeam />
      </Container>
    </div>
  )
};

export default Home;