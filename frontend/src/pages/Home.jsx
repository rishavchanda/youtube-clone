import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Card from '../components/Cards'
import axios from "axios";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Home = ({type}) => {

  const [videos, setVideos] = React.useState([]);
  useEffect(()=>{
    const fetchVideos = async () => {
      const res = await axios.get(`/video/${type}`);
      setVideos(res.data)
      console.log(res.data)
    }
    fetchVideos()
  },[type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video}/>
      ))}
    </Container>
  )
}

export default Home