import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {format} from 'timeago.js';
import axios from "axios";

const Container = styled.div`
  width: ${(props) => (props.type === "sm" ? "100%" : "256px")};
  cursor: pointer;
  margin-bottom: ${(props) => (props.type === "sm" ? "8px" : "45px")};
  display: ${(props) => props.type === "sm" && "flex"};
`;
const Image = styled.img`
  width: ${(props) => (props.type === "sm" ? "52%" : "256px")};
  height: ${(props) => props.type === "sm" ? "100%" : "144px"};
  background-color: #999;
`;

const Details = styled.div`
  width: ${(props) => props.type === "sm" && "50%"};
  display: flex;
  margin-top: ${(props) => props.type === "sm" ? "0px" : "12px"};
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.img`
  background-color: #999;
  width: 38px !important;
  height: 38px !important;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`
  padding: 0px;
  margin-left: ${(props) => props.type !== "sm" ? "0px" : "6px"};
`;

const Title = styled.h1`
  font-size: ${(props) => (props.type === "sm" ? "13px" : "16px")};
  font-weight: 500;
  margin: 0px 0px 10px 0px;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: ${(props) => (props.type === "sm" ? "12px" : "13px")};
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin: 3px 0px;
`;

const Info = styled.div`
  font-size: ${(props) => (props.type === "sm" ? "12px" : "13px")};
  font-weight: 300;
  color: ${({ theme }) => theme.textSoft};
  margin: 0px 0px;
`;

const Cards = ({ type, video }) => {

  const [channel, setchannel] = React.useState({});
  useEffect(()=>{
    const fetchchannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setchannel(res.data)
      console.log(res.data)
    }
    fetchchannel()
  },[video.userId]);


  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src={video.imgUrl}
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src={channel.img}
          />
          <Texts type={type}>
            <Title type={type}>{video.title}</Title>
            <ChannelName type={type}>{channel.name}</ChannelName>
            <Info type={type}>{video.views} views  • {format(video.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Cards;
