import React from "react";
import Me from "../Me/me";
import searchIcon from "../../../assets/search.png";
import "./contact-list-style.scss";
import USERS from "../../../user";
import Contacts from "../Contacts/contacts";
import CancelIcon from "@material-ui/icons/Cancel";
import { modal } from "../../../Redux/action/actions";
import { connect } from "react-redux";

class ContactList extends React.Component {
  constructor() {
    super();

    this.state = {
      users: USERS,
    };
  }

  render() {
    console.log("USERS", this.state.users);
    return (
      <div className="contacts-me-search-wraps">
        <div className="me-close-wrap">
          <Me />
          <div className="close">
            <CancelIcon
              style={{ color: "red" }}
              onClick={() => {
                this.props.dispatch(modal(false));
              }}
            />
          </div>
        </div>
        <div className="contacts-search-wrap">
          <img src={searchIcon} alt="Search Icon" />
          <input type="text" name="search" placeholder="Search..." />
        </div>
        <div className="contact-lists">
          {this.state.users.map((user, userID) => (
            <Contacts
              key={userID}
              id={user.id}
              username={user.username}
              lastLogin={user.lastLogin}
              description={user.description}
              avatar={user.avatar}
              conversationList={user.conversationList}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToDispatch = (dispatch) => ({
  dispatch: dispatch,
});

export default connect(mapStateToDispatch)(ContactList);
