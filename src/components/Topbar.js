import react, { Component } from "react";

import { AppBar, IconButton, Typography } from "@material-ui/core";
import ToolBar from "@material-ui/core/ToolBar";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/styles";
const styles = () => ({
  toolbar: {
    paddingRight: 24,
  },
  appBar:{
      position:"sticky"
  }
});
class Topbar extends Component {
  state = {
    open: false,
  };
  openDrawer = () => {
    this.setState({
      open: true,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div id="Topbar">
        <AppBar className={classes.appBar}>
          <ToolBar className={classes.toolbar}>
            <IconButton onClick={this.openDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              Test
            </Typography>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Topbar);
