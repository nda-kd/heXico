import React from "react";
import "./modal.styles.scss";
import { connect } from "react-redux";
import ContactList from "../messenger/ContactsList/contactList";

const Modal = (props) => {
  return (
    <div className={props.open ? "modal" : "hide"}>
      <div className="modal-contents">
        <ContactList />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  open: state.openModal,
});

export default connect(mapStateToProps)(Modal);
