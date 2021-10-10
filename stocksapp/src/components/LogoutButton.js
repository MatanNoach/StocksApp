import { Button } from "@material-ui/core";
import react, { Component } from "react";
import { logoutUser } from "../store/actions/AuthActions";
import { connect } from "react-redux";
class LogoutButton extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("in handleSubmit of logout")
    this.props.logout();
  };
  render() {
    return (
      <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
        Logout
      </Button>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};
export default connect(null, mapDispatchToProps)(LogoutButton);
