import React from "react";
// import FaceIcon from "@material-ui/icons/Face";
import BurstModeIcon from "@material-ui/icons/BurstMode";
import Modal from "../../modal/modal";
import { connect } from "react-redux";
import { modal } from "../../../Redux/action/actions";

import "./contactListModalstyles.scss";

const ContactsMenu = (props) => {
  return (
    <div className="menu-wrap">
      <div
        className="div-button"
        onClick={() => {
          props.dispatch(modal(true));
        }}
      >
        <BurstModeIcon style={{ width: "1.2em", height: "1.2em" }} />
        <span>Contact List </span>
      </div>
      <Modal />
    </div>
  );
};

const mapStateToDispatch = (dispatch) => ({
  dispatch: dispatch,
});

export default connect(mapStateToDispatch)(ContactsMenu);
