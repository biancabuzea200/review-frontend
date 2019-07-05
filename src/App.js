import React from 'react';
import Styled from 'styled-components';

import Nav from './components/Nav.js';
import Content from './components/Content.js';


class PlainApp extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Nav></Nav>
        <Content></Content>
      </div>
    );
  }
}

const App = Styled(PlainApp)`
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export default App;