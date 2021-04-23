import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { styled, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { authenticatedUser } from "../../../Redux/action/actions";

import "./me.scss";
import settingIcon from "../../../assets/setting.png";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FaceSharpIcon from "@material-ui/icons/FaceSharp";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import { Popover } from "react-tiny-popover";

class Me extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleClick(event) {
    this.setState({ anchorEl: !this.state.anchorEl });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  signOut = () => {
    this.props.dispatch(authenticatedUser(false));
    this.props.history.push("./");
  };

  render() {
    const MyAvatar = styled(Avatar)({
      backgroundColor: "#0ac5e6f1",
      color: "white",
      fontSize: "2em",
      fontFamily: "sans-serif",
      width: "4.8vw",
      height: "9.8vh",
      margin: "0.5em 0em 0em 1em",
    });

    const StyledMenuItem = withStyles((theme) => ({
      root: {
        "&:hover": {
          backgroundColor: "#0ac5e6f1",
          "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
            color: theme.palette.common.white,
          },
        },
      },
    }))(MenuItem);

    return (
      <div className="me">
        <div>
          <MyAvatar alt="My Avatar" src={this.props.adminAvatar}>
            A
          </MyAvatar>
          <div className="myIntroduce">
            <h2>
              {this.props.admin.username ? this.props.admin.username : "Admin"}
            </h2>
            <label>
              <p>
                {this.props.admin.description
                  ? this.props.admin.description
                  : "you didn't login properly"}
              </p>
            </label>
          </div>
        </div>
        <div>
          <Popover
            isOpen={this.state.anchorEl}
            positions={["top", "left", "bottom", "right"]} // preferred positions by priority
            content={
              <div
                style={{
                  backgroundColor: "white",
                  padding: ".6em 0em",
                  marginLeft: "0em",
                }}
              >
                <Link
                  to="./Profile"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <StyledMenuItem>
                    <ListItemIcon>
                      <FaceSharpIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Profile"
                      style={{ color: " rgb(63, 62, 62)" }}
                    />
                  </StyledMenuItem>
                </Link>
                <Link
                  to="./"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <StyledMenuItem onClick={this.signOut}>
                    <ListItemIcon>
                      <ExitToAppSharpIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Sign Out"
                      style={{ color: " rgb(63, 62, 62)" }}
                    />
                  </StyledMenuItem>
                </Link>
              </div>
            }
          >
            <img
              aria-controls="simple-menu"
              className="setting-icon"
              onClick={(event) => this.handleClick(event)}
              src={settingIcon}
              alt="Setting Icon"
            />
          </Popover>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  adminAvatar: state.adminAvatar,
  admin: state.admin,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});

const ShowTheLocationWithRouter = withRouter(Me);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTheLocationWithRouter);
