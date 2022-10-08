import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => (props.type === "sm" ? "100%" : "260px")};
  cursor: pointer;
  margin-bottom: ${(props) => (props.type === "sm" ? "8px" : "45px")};
  display: ${(props) => props.type === "sm" && "flex"};
`;
const Image = styled.img`
  width: ${(props) => (props.type === "sm" ? "52%" : "100%")};
  height: ${(props) => props.type === "sm" && "100%"};
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
  width: 36px !important;
  height: 36px !important;
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

const Cards = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://i.ytimg.com/vi/mQ8YNYtV55Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0PgALy78xl13S3iFpamwpJqLbog"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <Texts type={type}>
            <Title type={type}>How to make a website in 10 minutes</Title>
            <ChannelName type={type}>Code With Harry</ChannelName>
            <Info type={type}>1.2M views • 2 days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Cards;
