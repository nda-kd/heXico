import React from "react";
import { Avatar } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import USERS from '../../../user'
import "./status.scss";

class Status extends React.Component {

  constructor(){
    super()

    this.state = {
      users : USERS
    }
  }

  render() {
    const MyAvatar = styled(Avatar)({
      backgroundColor: "#eee",
      color: "white",
      fontSize: "1em",
      fontFamily: "sans-serif",
      width: "3.5em",
      height: "3.5em",
      marginLeft: "0em",
      border: "2px solid #0ac5e6f1",
    });

    console.log("status", this.props.users);

    return (
      <div className="status-wrap">
        <div className="status-text">
          <h3>Status :</h3>
        </div>
        <div className="all-statuses">
          <div className="indivisual-status">
            <MyAvatar src="https://free4kwallpapers.com/uploads/originals/2015/07/25/beatiful-girl-red-hair-blue-eyes-winter.jpg" />
            <h4>My Status</h4>
          </div>
          {this.state.users
            .filter((user) => user.status)
            .map((status,index) => (
              <div key={index} className="indivisual-status">
                <MyAvatar src={status.avatar} />
                <h4>{status.username}</h4>
              </div>
            ))}
        </div>
      </div>
    );
  }
}


export default Status;
