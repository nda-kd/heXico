import React, { Component } from "react";
import { connect } from "react-redux";
import { sendNewMessage } from "../../../Redux/action/actions";

import "./send.message.scss";

import AttachmentIcon from "@material-ui/icons/Attachment";
import sendButton from "../../../assets/SEND.svg";

import { Popover } from "react-tiny-popover";

import Picker from "emoji-picker-react";
import InsertEmoji from "@material-ui/icons/InsertEmoticonRounded";

class SendMessage extends Component {
  constructor() {
    super();

    this.state = {
      newMessage: {
        message: "",
        id: "",
      },
      AnchorEmoji: null,
    };
  }

  handleChange(event) {
    console.log("newMessage setState::", this.state.newMessage);
    this.setState({
      newMessage: { message: event.target.value, id: this.props.userId },
    });
  }

  sendMessage = () => {
    if (this.state.newMessage.id === undefined) {
      this.setState({
        newMessage: { ...this.state.newMessage, message: "" },
      });
      alert("Please choose a user to start a chat ");
      return;
    } else if (
      (this.state.newMessage.message.length === 0 ||
        this.state.newMessage.message === " ") &&
      this.state.newMessage.id !== undefined
    ) {
      return;
    }

    this.props.dispatch(sendNewMessage(this.state.newMessage));
    this.setState({ newMessage: { message: "", id: "" } });

    console.log("newMessage setState click::", this.state.newMessage);
  };

  sendKey = (event) => {
    if (event.key === "Enter") this.sendMessage();
    console.log("onKey::", event.key);
  };

  //emoji functions::

  onEmojiClick = (event, emojiObject) => {
    console.log("emoj::", this.state.newMessage);
    this.setState({
      newMessage: {
        message: this.state.newMessage.message + emojiObject.emoji,
        id: this.props.userId,
      },
    });
    this.handleClose();
  };

  handleClick = (event) => {
    this.setState({ AnchorEmoji: !this.state.AnchorEmoji });
    console.log("emoji component is running ...", this.state.AnchorEmoji);
  };

  handleClose = () => {
    this.setState({ AnchorEmoji: null });
  };

  render() {
    console.log("userId", this.props.userId);
    return (
      <div className="send-wrap">
        <div className="emoji-wrap">
          {/* Emoji wrap */}
          <div>
            <Popover
              isOpen={this.state.AnchorEmoji}
              positions={["top", "bottom", "left", "right"]} // preferred positions by priority
              content={<Picker onEmojiClick={this.onEmojiClick} />}
            >
              <InsertEmoji
                className="emoji-icon MuiIcon-fontSizeLarge"
                onClick={this.handleClick}
              />
            </Popover>
          </div>
        </div>
        <input
          value={this.state.newMessage.message}
          className="text-input"
          type="text"
          placeholder="Type a message"
          onChange={(e) => this.handleChange(e)}
          onKeyPress={this.sendKey}
        />
        <div className="attach-wrap">
          <label>
            <AttachmentIcon
              className="emoji-icon MuiIcon-fontSizeLarge"
              style={{ fontSize: 27 }}
            />
            <input type="file" />
          </label>
        </div>
        <img
          className="send-img"
          src={sendButton}
          alt="Send Button"
          onClick={this.sendMessage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);
