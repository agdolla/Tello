import React, { Component } from 'react';
import styled from 'emotion/react';
import PropTypes from 'prop-types';

import { COLORS, UNITS_IN_PX } from '../../constants';
import { ShowProps } from '../../types';

import Heading from '../Heading';
import Subheading from '../Subheading';
import Checkbox from '../Checkbox';

import { getColorForStatus } from './ShowSearchResult.helpers';


const propTypes = {
  show: ShowProps,
  isAlreadyAdded: PropTypes.bool,
  onToggleShow: PropTypes.func.isRequired,
};

class ShowSearchResult extends Component {
  state = {
    isHovering: false,
    isSelected: false,
  }

  handleMouseEnter = () => this.setState({ isHovering: true })
  handleMouseLeave = () => this.setState({ isHovering: false })
  handleClick = () => {
    this.setState({ isSelected: !this.state.isSelected });

    this.props.onToggleShow(this.props.show.id);
  }

  render() {
    const { isHovering, isSelected } = this.state;
    const {
      show: { name, status, region },
      isAlreadyAdded,
    } = this.props;


    return (
      <Wrapper
        deEmphasize={isAlreadyAdded}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={!isAlreadyAdded && this.handleClick}
      >
        <Checkbox
          disabled={isAlreadyAdded}
          highlighted={isHovering}
          checked={isSelected || isAlreadyAdded}
        />

        <MainContent>
          <Heading size="small">
            {name}
            {region && <Region>({region})</Region>}
          </Heading>
          {isAlreadyAdded && (
            <Subheading size="small">Already Tracking</Subheading>
          )}
        </MainContent>

        <DevelopmentStatus status={status}>
          {status}
        </DevelopmentStatus>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: default;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  opacity: ${props => props.deEmphasize ? 0.5 : 1};
  user-select: none;
`;

const MainContent = styled.div`
  flex: 1;
  padding-top: ${UNITS_IN_PX[1]};
  padding-bottom: ${UNITS_IN_PX[1]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: ${UNITS_IN_PX[1]};
  transform: translateY(-1px);
`;

const Region = styled.span`
  display: inline-block;
  margin-left: ${UNITS_IN_PX[1]};
  font-weight: normal;
  font-size: 18px;
  opacity: 0.5;
`;

const DevelopmentStatus = styled.div`
  font-size: 12px;
  color: ${getColorForStatus};
`;

ShowSearchResult.propTypes = propTypes;

export default ShowSearchResult;