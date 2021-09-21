import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24,
  },
  appBar: {
    position: "sticky",
    zIndex: theme.zIndex.Drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    position: "sticky",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "noWrap",
    width: drawerWidth,
  },
  sidebarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.units * 3,
    height: "100vh",
    
  },
  appBarSpace: theme.mixins.toolbar,
});
class AdminWrapper extends Component {
  constructor(props) {
    super(props);
  }
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
    const { classes } = this.props;
    return (
      <div id="Wrapper">
        <Topbar
          open={this.state.open}
          handleDrawer={this.handleDrawerOpen}
          drawerWidth={drawerWidth}
        />
        <Sidebar
          open={this.state.open}
          styleClasses={{
            drawerPaper: classes.drawerPaper,
            sidebarIcon: classes.sidebarIcon,
          }}
          handleDrawer={this.handleDrawerClose}
        />
        <main className={classes.content}>
          <div className={classes.appBarSpace}>{this.props.children}</div>
        </main>
      </div>
    );
  }
}
export default withStyles(styles)(AdminWrapper);
