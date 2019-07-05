import React from 'react';
import Styled from 'styled-components';

import RatingStars from './RatingStars.js';
import RoundButton from './RoundButton';

class PlainProfileView extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <img id="profile-image" alt=""/>
        <span id="profile-name">
          Mikayil Murad
        </span>

        <RatingStars totalStars="5" stars="2" static/>

        <span id="reviews">
          1 reviews
        </span>

        <div id="message-review-buttons">
          <RoundButton id="message">message</RoundButton>
          <RoundButton id="review">review</RoundButton>
        </div>

        <div className="text-center">
          Lives in: Olympic Village<br/>
          From: Azerbaijan
        </div>
      </div>
    );
  }
}

const ProfileView = Styled(PlainProfileView)`
  background-color: white;
  padding: 2em;
  text-align: center;

  #profile-image {
    background-image: url(${require("../images/mikayil.jpg")});
    background-size: cover;
    background-repeat: no-repeat;
    height: 10em;
    width: 10em;
    border: solid #3D67E9 7px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    margin-top: 1em;
    vertical-align: middle;
  }

  #profile-name {
    font-weight: bold;
    font-size: 1.2em;
  }

  #message-review-buttons {
    display: flex;
    justify-content: space-between;
  }

  #message {
    background-color: #21B4C6;
    border-color: #21B4C6;
  }

  #review {
    background-color: white;
    color: #21B4C6;
    border: solid 2px #21B4C6; 
  }
`;
export default ProfileView;
