import React, { Component } from "react";
import { connect } from "react-redux";
import { sendNewMessage } from "../../../Redux/action/actions";
import "./send.message.scss";

import AttachmentIcon from "@material-ui/icons/Attachment";
import sendButton from "../../../assets/SEND.svg";

import Picker from "emoji-picker-react";
import Popover from "@material-ui/core/Popover";
import InsertEmoji from "@material-ui/icons/InsertEmoticonRounded";

class SendMessage extends Component {
  constructor() {
    super();

    this.state = {
      newMessage: "",
      chosenEmoji: "",
      AnchorEmoji: null,
    };
  }

  handleChange(event) {
    console.log("newMessage setState::", this.state.newMessage);
    this.setState({ newMessage: event.target.value });
  }

  sendMessage = () => {
    if (this.state.newMessage.length === 0 || this.state.newMessage === " ") {
      return;
    }
    this.props.dispatch(sendNewMessage(this.state.newMessage));
    this.setState({ newMessage: "" });

    console.log("newMessage setState click::", this.state.newMessage);
  };

  sendKey = (event) => {
    if (event.key === "Enter") this.sendMessage();
    console.log("onKey::", event.key);
  };

  //emoji function::

  onEmojiClick = (event, emojiObject) => {
    this.setState({ newMessage: this.state.newMessage + emojiObject.emoji });
  };

  handleClick = (event) => {
    this.setState({ AnchorEmoji: event.currentTarget });
    console.log("emoji component is running ...", this.state.AnchorEmoji);
  };

  handleClose = () => {
    this.setState({ AnchorEmoji: null });
  };

  render() {
    console.log("chosenEmoji", this.state.chosenEmoji);
    const open = Boolean(this.state.AnchorEmoji);
    const id = open ? "simple-popover" : undefined;

    return (
      <div className="send-wrap">
        <div className="emoji-wrap">
          <div>
            <InsertEmoji
              className="emoji-icon MuiIcon-fontSizeLarge"
              onClick={this.handleClick}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={this.state.AnchorEmoji}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Picker onEmojiClick={this.onEmojiClick} />
            </Popover>
          </div>
        </div>
        <input
          value={this.state.newMessage}
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
  newEmoji: state.newEmoji,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);
