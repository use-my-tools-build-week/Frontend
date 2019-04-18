import React from 'react';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 4px solid white;

  img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
  }
`;

export default ({ src }) => (
  <AvatarWrapper>
    <img src={src} />
  </AvatarWrapper>
);

const CardAvatarWrapper = styled.div`
  margin-top: 112px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 4px solid white;

  img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
  }
`;

export const CardAvatar = ({ src }) => (
  <CardAvatarWrapper>
    <img src={src} />
  </CardAvatarWrapper>
);
