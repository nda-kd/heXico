import { connect } from "react-redux";
import Profile from "../components/auth/Profile/Profile";
import Messenger from "../components/messenger/MessengerContainer/messenger";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute(props) {
  return (
    <div>
      {props.authenticated ? (
        <>
      <Route path="/messenger" component={Messenger} />
      <Route path="/profile" component={Profile} />
      </>
      ) : (
        <Redirect to='/' />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

export default connect(mapStateToProps)(ProtectedRoute);
