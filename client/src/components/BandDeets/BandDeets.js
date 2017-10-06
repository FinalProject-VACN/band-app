import React, { Component } from 'react';
import "./BandDeets.css";

class BandDeets extends Component{
  render(){
    return(
      <div>
        <div>
          <img
          src={this.props.bandsData.photoURL}
          alt="dogs singing"
          className="bandProfilePicture"/>
        </div>
        

        <div>
          <h2>{this.props.bandsData.name}</h2>
          <h4>{this.props.bandsData.bio}</h4>
          <div>
              <a href="#"><img src="http://friendsofpritzker.org/wp-content/uploads/2016/03/facebook.png"
              alt="facebook icon"
              className="fa facebook_icon"/></a>
              <a href="#"><img src="http://mcdanielsinteractive.com/_data/images/interface/social/youtube-variation.png"
              alt="youtube icon"
              className="fa youtube_icon"/></a>
              <a href="#"><img src="http://icons.iconarchive.com/icons/sicons/basic-round-social/512/soundcloud-icon.png"
              alt="youtube icon"
              className="fa youtube_icon"/></a>
          </div>
        </div>
      </div>
    )
  }
}



export default BandDeets;
