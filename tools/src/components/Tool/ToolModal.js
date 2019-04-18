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

const ToolDescription = styled.div``;

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
        <img src={tool.img_url} />
        <Avatar src={tool.loaner_img_url} />
        <div>Name: {tool.name}</div>
        <div>Distance: {tool.distance} miles away</div>
        <div>Owner: {`${tool.firstname} ${tool.lastname[0]}.`}</div>
        <div>Condition: {tool.condition_name}</div>
        {tool.is_requested ? (
          <button>Unrequest</button>
        ) : (
          <button>Request</button>
        )}
        <div>Category: {tool.category_name}</div>
        {tool.is_favorited ? (
          <button>Unfavorite</button>
        ) : (
          <button onClick={onFavorite}>Favorite</button>
        )}
        <ToolDescription>Description: {tool.description}</ToolDescription>
      </Modal>
    </ModalWrapper>
  );
};

export default ToolModal;
