import React from 'react';
import styled from 'emotion/react';

import { getColorForStatus } from './ShowStatus.helpers';


const ShowStatus = ({ status }) => {
  return (
    <Wrapper status={status}>
      {status}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 12px;
  color: ${getColorForStatus};
`;


export default ShowStatus;
