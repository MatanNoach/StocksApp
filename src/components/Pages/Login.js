import React, { Component } from "react";
import { Button, Divider, Typography, Link } from "@mui/material";
import Field from "../Common/Field";
import * as Yup from "yup";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { loginUser, createUser } from "../../store/actions/AuthActions";
import { Box } from "@mui/material";

const fields = ["email", "password"];
// handles the sign up if the form is filled correctly
class Login extends Component {
  render() {
    return (
      <Box
        component="form"
        sx={{
          // set the box to flex-box
          display: "flex",
          // choose column (y-axis) as main axis
          flexDirection: "column",
          // align items on the counter-main axis (x) to the center
          alignItems: "center",
          bgcolor: "background.paper",
          p: 3,
          marginTop: "100px",
          width: 500,
          borderRadius: "12px",
          boxShadow: 2,
          // nestes - direct child - each type - margin 1
          "& >*": { m: 1 },
        }}
      >
        <h1>Login</h1>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "flex-start",
            "& > *": { m: 1 },
          }}
        >
          {fields.map((f, i) => {
            return (
              <Field
                key={i}
                name={f}
                // this goes to the formik values and binds the field value with the formik value
                value={this.props.values[f]}
                // updates the value when it changes
                onChange={this.props.handleChange}
                // onBlur and touched helps checking if the field has been touched
                onBlur={this.props.handleBlur}
                touched={this.props.touched[f]}
                // get the propper error to print
                errors={this.props.errors[f]}
                type={f}
              />
            );
          })}
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          data-flag="login"
          onClick={this.props.handleSubmit}
          style={{ width: "50%" }}
        >
          Login
        </Button>
        <Divider style={{ width: "100%" }} />
        <Typography>
          Not a member?&nbsp;
          <Link
            type="submit"
            component="button"
            onClick={this.props.handleSubmit}
            data-flag="signUp"
            style={{ fontSize: 16 }}
          >
            Signup now
          </Link>
        </Typography>
      </Box>
    );
  }
}

// This goes to the store's state, and returns a prop of the state's values
// so on the start, this.props.auth will be equal to the auth initial values, but later it'll change to
// the auth updated values
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(loginUser(email, password)),
    signUp: (email, password) => dispatch(createUser(email, password)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    // helps mapping from values to fields
    mapPropsToValues: () => ({
      email: "",
      password: "",
    }),
    // validation schema - gets a yup shape() result
    // yup.shape() - gets an object of fields and validation needs to be done, and returns a validation schema
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Please enter email")
        .email("Please enter a valid email"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Please enter password"),
    }),

    handleSubmit: async (values, thisComponent) => {
      const dataFlag = document.activeElement.dataset.flag;
      console.log("function chosen: ", dataFlag);
      if (!dataFlag || dataFlag === "login") {
        console.log("logging in handle submit");
        thisComponent.props.login(values.email, values.password);
      } else if (dataFlag === "signUp") {
        thisComponent.props.signUp(values.email, values.password);
      }
    },
  })(Login)
);
