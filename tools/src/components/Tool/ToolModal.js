import React, { useState } from 'react';
import styled from 'styled-components';
import AxiosAuth from '../../AxiosAuth';
import Avatar from '../Common/Avatar';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.33;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  color: black;
  z-index: 60;
  max-width: 80%;
  width: 800px;
`;
const Image = styled.img`
  height: 216px;	
  width: 376px;
  margin: 0 auto;
  border-radius: 5px;
`;
const ModalContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
`;

const Name = styled.div`
  color: #000000;	
  font-family: "Open Sans";	
  font-size: 30px;	
  font-weight: bold;	
  line-height: 48px;
  margin-right: 130px;
`
const Owner = styled.div`
  color: #000000;	
  font-family: "Open Sans";	
  font-size: 16px;	
  font-weight: bold;	
  line-height: 24px;
`
const Info = styled.div`
    color: #000000;	
    font-family: "Open Sans";	
    font-size: 16px;	
    line-height: 24px;
    margin-right: 30px;  
    margin-top: 24px;
`
const Info1 = styled.div`
    color: #000000;	
    font-family: "Open Sans";	
    font-size: 16px;	
    line-height: 24px;
    margin-right: 55px;  
    margin-left: 59px;
    margin-top: 24px;
`

const Button1 = styled.button`
  height: 40px;	
  width: 136px;
  color: #FFFFFF;	
  font-family: "Open Sans";
  font-size: 16px;	
  font-weight: bold;	
  line-height: 24px;	
  text-align: center;
  background: #617ac7
  border: none;
  border-radius: 5px;
  margin-left: 107px;
  margin-right: 164px;
  margin-top: 32px;
`
const Button2 = styled.button`
  height: 40px;	
  width: 136px;
  color: #00a0ff;	
  font-family: "Open Sans";
  font-size: 16px;	
  font-weight: bold;	
  line-height: 24px;	
  text-align: center; 
  background: white;
  border: 2px solid #00a0ff;
  border-radius: 5px;
  margin-top: 32px;
`
const ToolDescription = styled.div`
  margin-left: 40px;
  margin-top: 32px;
`;

const Description = styled.div`
color: #000000;	
font-family: "Open Sans";	
font-size: 16px;	
font-weight: bold;	
line-height: 24px;
margin-bottom: 10px;
`

const ToolModal = props => {
  const { onClose, tool, onFavorite } = props;

  return (
    <ModalWrapper>
      <Overlay
        onClick={() => {
          onClose && onClose();
        }}
      />
      <Modal>
        <ModalContainer>
          <Image src={tool.img_url} />
          
          <ContentContainer>
            <Name>{tool.name}</Name>
            <Avatar src={tool.loaner_img_url} />
            <Owner>{`${tool.firstname} ${tool.lastname[0]}.`}</Owner>
            <Info1>Distance: {tool.distance} miles away</Info1>
            <Info>Condition: {tool.condition_name}</Info>
            <Info>Category: {tool.category_name}</Info>
            {tool.is_requested ? (
              <Button1>Unrequest</Button1>
            ) : (
              <Button1>Request</Button1>
            )}
            {tool.is_favorited ? (
              <Button2>Unfavorite</Button2>
            ) : (
              <Button2 onClick={onFavorite}>Favorite</Button2>
            )}
            <ToolDescription><Description>Description:</Description><br/> {tool.description}</ToolDescription>
          </ContentContainer>
        </ModalContainer>
      </Modal>
    </ModalWrapper>
  );
};

export default ToolModal;
