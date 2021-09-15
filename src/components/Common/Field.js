import { TextField } from "@material-ui/core";
import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      <div className="col-md-6">
        <TextField
          label={this.props.name}
          id={this.props.name}
          variant="outlined"
          // change the value
          onChange={this.props.onChange}
          // helps checking the touch
          onBlur={this.props.onBlur}
          // color in red
          error = {this.props.errors &&this.props.touched ? true:false}
          // set error
          helperText={this.props.errors &&this.props.touched ? this.props.errors:""}
          type={this.props.type}
        />
      </div>
    );
  }
}
export default Field;
