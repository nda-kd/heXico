import React, { Component } from "react";
import { connect } from "react-redux";
import "./chat.page.scss";

class ChatPage extends Component {

  render() {
    console.log("mapState::", this.props.newMessage);
    return (
      <div className="chat-box">
        {this.props.newMessage.map(
          (newMessage, index) =>
          this.props.userId === newMessage.id && (
              <div className="mymessage-wrap" key={index}>
                <div className="mymessage">
                <p>{newMessage.message}</p>
                </div>
              </div>
            )
        )}
      </div>
    )
    }
  }

const mapStateToProps = (state) => ({
  newMessage: state.newMessage,
  userId: state.user.id
});

const mapDispatchToProps = (dispatch) => ({
  dispatch : dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
