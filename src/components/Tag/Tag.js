import styled from 'emotion/react';

import { COLORS } from '../../constants';


const Tag = styled.span`
  display: inline-block;
  font-size: 10px;
  color: ${COLORS.white};
  background: ${props => props.color};
  padding: 4px 6px;
`;

export default Tag;