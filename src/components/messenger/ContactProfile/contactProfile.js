import React, { Component } from "react";
import "./contact.profile.scss";
import { Avatar } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import CallSharpIcon from "@material-ui/icons/CallSharp";
import VideocamIcon from "@material-ui/icons/Videocam";
import InfoIcon from "@material-ui/icons/Info";
import { connect } from "react-redux";

class ContactProfile extends Component {
  userNameChars = (user) => {
    const userName = user.match(/\w+/gi);
    let chars = "";
    for (user in userName) chars += userName[user][0];
    return chars.toUpperCase();
  };

  render() {
    const MyAvatar = styled(Avatar)({
      backgroundColor: "#0ac5e6f1",
      color: "white",
      fontSize: "2em",
      fontFamily: "sans-serif",
      width: "7vw",
      height: "14vh",
      margin: "0.3em 0em .3em 2.2em",
    });

    const user = this.props.user;

    return (
      <div className="contact-profile-wrap">
        <div className="contacts-profile">
          <MyAvatar alt="My Avatar" src={user.avatar}>
            {user.username ? this.userNameChars(user.username) : "UN"}
          </MyAvatar>
          <h2>{user.username ? user.username : "User Name"}</h2>
          {/* <p className='center'>Location</p> */}
          <hr />
          <label>
            <p>{user.description ? user.description : "Description ..."}</p>
          </label>
          <div className="contact-profile-menu-wrap">
            <CallSharpIcon style={{ fontSize: "35", color: "#0ac5e6f1" }} />
            <InfoIcon style={{ fontSize: "35", color: "#0ac5e6f1" }} />
            <VideocamIcon style={{ fontSize: "35", color: "#0ac5e6f1" }} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ContactProfile);
