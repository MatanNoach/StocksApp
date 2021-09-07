import React, { Component } from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import Field from "../Common/Field";
import * as Yup from "yup";
import {withFormik } from "formik";

const fields = ["email","password"];
class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={this.props.handleSubmit}>
            {fields.map((f, i) => {
              return (
                <Field
                  key={i}
                  name={f}
                  // this goes to the formik values and binds the field value with the formik value
                  value = {this.props.values[f]}
                  // updates the value when it changes
                  onChange={this.props.handleChange}
                  // onBlur and touched helps checking if the field has been touched
                  onBlur={this.props.handleBlur}
                  touched={this.props.touched[f]}
                  // get the propper error to print
                  errors={this.props.errors[f]}
                />
              );
            })}
            <div className="col-md-6">
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withFormik({
    // helps mapping from values to fields
    mapPropsToValues:()=>({
        email:"",
        password:""
    }),
    // validation schema - gets a yup shape() result
    // yup.shape() - gets an object of fields and validation needs to be done, and returns a validation schema
    validationSchema:Yup.object().shape({
      email:Yup.string().required("Please enter email").email("Please enter a valid email"),
      password:Yup.string().required("Please enter password")
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

    // handles the submit if the form is filled correctly
    handleSubmit:(values,{setSubmitting})=>{
        console.log("VALUES: ",values);
        alert("You've submitted the form");
    }
})(Login);
