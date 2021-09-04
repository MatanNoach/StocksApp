import { Component } from "react";
import { AppBar, IconButton, Typography } from "@material-ui/core";
import ToolBar from "@material-ui/core/ToolBar";
import MenuIcon from "@material-ui/icons/Menu";

class Topbar extends Component {
  render() {
    return (
        <AppBar
        className={this.props.open ? (this.props.styleClasses.appBarShift) :(this.props.styleClasses.appBar)}
      >
        <ToolBar className={this.props.styleClasses.toolbar}>
          <IconButton onClick={this.props.handleDrawer} color="inherit" >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Stocks App
          </Typography>
        </ToolBar>
      </AppBar>
    );
  }
}
export default Topbar;
