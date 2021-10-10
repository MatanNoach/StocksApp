import React, { Component } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Box} from "@mui/system";

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 10,
            flexGrow:1,
            p:3,
            ...(this.state.open && { ml: `${drawerWidth}px` }),
          }}
        >
          {this.props.children}
        </Box>
      </div>
    );
  }
}
export default Wrapper;
