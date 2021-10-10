import { Component } from "react";
import { Divider, Drawer, IconButton, Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SidebarMenu from "./SidebarMenu";


class Sidebar extends Component {
  render() {
    return (
      <Drawer
        open={this.props.open}
        sx={{
          width: this.props.width,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: this.props.width,
            boxSizing: "border-box",
          },
        }}
        variant="persistant"
        anchor="left"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 1,
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={this.props.handleDrawer}>
            {this.props.open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
        <Divider />
        <SidebarMenu />
      </Drawer>
    );
  }
}
export default Sidebar;
