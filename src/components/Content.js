import React from 'react';
import Styled from 'styled-components';

import RatingView from './RatingView.js';
import ProfileView from './ProfileView.js';

const Row = Styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
`;

class PlainContent extends React.Component {
  render() {
    return (
      <main className={this.props.className}>
        <Row>
          <RatingView/>
          <ProfileView/>
        </Row>
      </main>
    );
  }
}

const Content = Styled(PlainContent)`
  display: flex;
  height: 100%;
  justify-content: center;
`;
export default Content;