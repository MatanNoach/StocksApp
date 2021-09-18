import React, { Component } from "react";
import "./Login.css";
import { Button, Divider, Typography, Link } from "@material-ui/core";
import Field from "../Common/Field";
import * as Yup from "yup";
import { withFormik } from "formik";
import { createUserApi } from "../../UserApi";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/AuthActions";

const fields = ["email", "password"];
const userApi = createUserApi();
// handles the sign up if the form is filled correctly
async function handleSignup(values) {
}
class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-form">
          <h1>Login</h1>
          <form>
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
            <div className="col-md-12">
              <Button
                className="login-button"
                type="submit"
                variant="contained"
                color="primary"
                data-flag="login"
                onClick={this.props.handleSubmit}
              >
                Login
              </Button>
              <Divider />
            </div>
            <div style={{ textAlign: "center" }}>
              <Typography>
                Not a member?&nbsp;
                <Link
                  style={{ fontSize: 16 }}
                  type="submit"
                  component="button"
                  onClick={this.props.handleSubmit}
                  data-flag="signUp"
                >
                  Signup now
                </Link>
              </Typography>
            </div>
          </form>
        </div>
      </div>
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
      password: Yup.string().required("Please enter password"),
    }),
    // Old Validation with formik
    // // validation function:
    // // checks for every value if it is not empty
    // validate: values=>{
    //     const errors={};
    //     Object.keys(values).map(k=>{
    //         if(!values[k] ){
    //             errors[k]="please enter "+k.toString();
    //         }
    //     })
    //     return errors;
    // },

    handleSubmit: async (values, thisComponent) => {
      const dataFlag = document.activeElement.dataset.flag;
      console.log("function chosen: ", dataFlag);
      if (!dataFlag || dataFlag === "login") {
        console.log("logging in handle submit");
        thisComponent.props.login(values.email, values.password);
      } else if (dataFlag === "signUp") {
        handleSignup(values);
      }
    },
  })(Login)
);
