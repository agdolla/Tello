import React from 'react';
import styled from 'emotion/react';

import {
  BREAKPOINTS,
  ROW_HEIGHT,
  UNITS_IN_PX,
  HEADER_HEIGHT_PX,
  FOOTER_HEIGHT_PX,
  Z_INDICES,
} from '../../constants';

import DesktopNavigation from '../DesktopNavigation';
import Header from '../Header';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Spacer from '../Spacer';
import Footer from '../Footer';
import LoggedInScrollbars from '../LoggedInScrollbars';
import MediaQuery from '../MediaQuery';
import Spinner from '../Spinner';
import NoShowsYet from '../NoShowsYet';
import FetchEpisodes from '../FetchEpisodes';


const LoggedInLayout = ({ children, isFetching, noShowsYet }) => {
  let mainContent;

  if (isFetching) {
    mainContent = (
      <SpinnerWrapper>
        <Spinner size="lg" />
      </SpinnerWrapper>
    );
  } else if (noShowsYet) {
    mainContent = (
      <MaxWidthWrapper>
        <NoShowsYet />
      </MaxWidthWrapper>
    );
  } else {
    mainContent = children;
  }

  return [
    <Header key="header" />,

    <MaxWidthWrapper key="wrapper">
      <Spacer size={ROW_HEIGHT} />

      <DesktopNavigation />

      <Body>
        {mainContent}
      </Body>
    </MaxWidthWrapper>,

    <Footer key="footer" />,

    // Logged-in data component
    <FetchEpisodes key="fetch" />,

    // Style the scrollbars in webkit
    <LoggedInScrollbars key="scrollbars" />
  ];
};

const Body = styled.div`
  position: relative;
  z-index: ${Z_INDICES.root};

  min-height: calc(100vh - ${HEADER_HEIGHT_PX} - ${FOOTER_HEIGHT_PX});

  @media ${BREAKPOINTS.sm} {
    min-height: calc(100vh);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${UNITS_IN_PX[6]} 0;
`;

export default LoggedInLayout;