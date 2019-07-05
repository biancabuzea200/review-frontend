import React from 'react';
// import './Nav.css';
import Styled from 'styled-components';

class PlainNav extends React.Component {
  render() {
    return (
      <nav className={this.props.className}>
        <a id="logo" href="#">fooditory</a>
        <button id="hamburger-menu-btn">
          <span>&#9776;</span>
          Menu
        </button>
      </nav>
    );
  }
}

const Nav = Styled(PlainNav)`
  background-color: #3F66EF;
  color: white;

  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  justify-content: space-between;

  a {
    color: white;
    font-weight: bold;
    font-size: 1.2em;
    text-decoration: none;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.85;
  }

  button:active {
    box-shadow: -1px 1px 5px 0px rgba(0,0,0,0.50);
  }

  #logo {
    margin-left: 3rem;
  }

  #hamburger-menu-btn {
    font-size: 1em;
    background-color: white;
    color: #3F66EF;
    border-color: #3F66EF;
    align-items: center;
    display: flex;
    margin-right: 3rem;
    color: #21B4C6;
    padding: 0.3em 0.5em;
    border-radius: 5px;
    border-width: 0px;
  }

  #hamburger-menu-btn > span {
      padding-right: 0.5em;
  }
`;
export default Nav;
