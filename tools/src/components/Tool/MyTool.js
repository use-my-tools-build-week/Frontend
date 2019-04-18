import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ToolModal from './ToolModal';
import { CardAvatar } from '../Common/Avatar';
import { fetchTool, fetchToolSuccess, favoriteTool } from '../../Actions';

const ToolWrapper = styled.div`
  height: 240px;
  width: 256px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.03),
    0 6px 10px 2px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 62px;
`;

const ToolImg = styled.img`
  position: absolute;
  top: 8;
  left: 8;
  height: 140px;
  width: 240px;
  padding-top: 10px;
`;

const MyButton1 = styled.button`
    height: 31px;	
    width: 78px;
    color: #00A0FF;	
    font-family: "Open Sans";	
    font-size: 14px;	
    line-height: 20px;	
    text-align: center;
    background: white;
    border: 2px solid #00a0ff;
    border-radius: 5px;
    margin-top: 22px;
    margin-right: 50px;
    
`
const MyButton2 = styled.button`
    height: 31px;	
    width: 78px;
    color: #00A0FF;	
    font-family: "Open Sans";	
    font-size: 14px;	
    line-height: 20px;	
    text-align: center;
    background: white;
    border: 2px solid #00a0ff;
    border-radius: 5px;
    margin-top: 22px;
    
`
const Toolname = styled.div`
    color: #000000;	
    font-family: "Open Sans";	
    font-size: 16px;	
    font-weight: bold;	
    line-height: 24px;	
    text-align: center;
`;



export default connect(
  null,
  { fetchToolSuccess, favoriteTool }
)(({ tool, favoriteTool }) => {
  const [modalShowing, setModalShowing] = useState(false);
  return (
    <ToolWrapper>
      {modalShowing && (
        <ToolModal
          tool={tool}
          onClose={() => setModalShowing(false)}
          onFavorite={() => favoriteTool(tool.id)}
        />
      )}
      <ToolImg src={tool.img_url} />
      <CardAvatar src={tool.loaner_img_url} />
      <Toolname onClick={() => setModalShowing(true)}>{tool.name}</Toolname>
      <div>
          <MyButton1>Modify</MyButton1>
          <MyButton2>Delete</MyButton2>
      </div>
    </ToolWrapper>
  );
});
