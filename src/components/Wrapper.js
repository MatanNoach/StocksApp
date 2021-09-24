import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Box } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";

const drawerWidth = 240;
class Wrapper extends Component {
  state = {
    open: false,
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <CssBaseline />
        <Topbar
          open={this.state.open}
          handleDrawer={this.handleDrawerOpen}
          drawerWidth={drawerWidth}
          page={this.props.page}
        />
        <Sidebar
          open={this.state.open}
          handleDrawer={this.handleDrawerClose}
          width={drawerWidth}
        />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
          {this.props.children}
        </Box>
      </div>
    );
  }
}
export default Wrapper;
