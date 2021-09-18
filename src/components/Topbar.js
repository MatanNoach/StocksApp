import { Component } from "react";
import { AppBar, IconButton, Typography, Grid } from "@material-ui/core";
import ToolBar from "@material-ui/core/ToolBar";
import MenuIcon from "@material-ui/icons/Menu";
import LogoutButton from "./LogoutButton";
import { connect } from "react-redux";

class Topbar extends Component {
  render() {
    return (
      <AppBar
        className={
          this.props.open
            ? this.props.styleClasses.appBarShift
            : this.props.styleClasses.appBar
        }
      >
        <ToolBar className={this.props.styleClasses.toolbar}>
          <Grid
            justify="space-between"
            container
            spacing={24}
          >
            <Grid item>
              <Typography component="h1" variant="h6" color="inherit" noWrap>
                <IconButton onClick={this.props.handleDrawer} color="inherit">
                  <MenuIcon />
                </IconButton>
                Stocks App
              </Typography>
            </Grid>
            {this.props.auth.token?
            <Grid item>
              <LogoutButton />
            </Grid>:
            null
          }
          </Grid>
        </ToolBar>
      </AppBar>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    auth:state.auth
  }
}
export default connect(mapStateToProps)(Topbar);
