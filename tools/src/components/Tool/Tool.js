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
`;

const ToolImg = styled.img`
  position: absolute;
  top: 8;
  left: 8;
  height: 140px;
  width: 240px;
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
      <div onClick={() => setModalShowing(true)}>{tool.name}</div>
      <div>Owner: {`${tool.firstname} ${tool.lastname[0]}.`}</div>
    </ToolWrapper>
  );
});
