import React, { Component } from 'react';
import {signOut} from "../../helpers/auth";
import "./Navbar.css";

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state = {
      bandId:this.props.bandId
    }
  }

  logUserOut = (e) => {
    e.preventDefault();
    // console.log("you clicked the log out button");
    signOut().then(function() {
      // Sign-out successful.
      console.log("You've signed out");
      window.location.pathname = "/";
    }).catch(function(error) {
      // An error happened.
    });;
  }

  render(){
    return(

      <div className="profile_nav">
        <a className="profile_navbar_elem" href="/music-options">Search for other bands</a>
        <a className="profile_navbar_elem" href={"/profile/" + this.props.bandId}>Band Profile</a>
        <a className="profile_navbar_elem" href={"/gigs/" + this.props.bandId}>Gigs</a>
      </div>
    )
  }
}



export default Navbar;
