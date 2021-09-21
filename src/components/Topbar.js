import { Component } from "react";
// import { AppBar, IconButton, Typography, Grid } from "@material-ui/core";
// import ToolBar from "@material-ui/core/ToolBar";
// import MenuIcon from "@material-ui/icons/Menu";
// import LogoutButton from "./LogoutButton";
import LogoutButton from "./LogoutButton";
import { connect } from "react-redux";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/system";
import { createTheme, IconButton, Toolbar, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
const theme = createTheme();
// crate AppBar component based on MuiAppBar
// get theme (always exists), open and drawerWidth properties passed in <AppBar>
const AppBar = styled(MuiAppBar)(({ theme, open, drawerWidth }) => {
  // returns a new objecj:
  return open
    ? {
      // if open - set width and margin left propeties for the AppBar
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        // allow transition that changes the margin and width properties
        transition: theme.transitions.create(["margin", "width"], {
          // set enter transition values
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }
    : {
      // if not open - only do transition while keeping the original width and height values
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      };
});

class Topbar extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          open={this.props.open}
          drawerWidth={this.props.drawerWidth}
        >
          <Toolbar>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              <IconButton
                onClick={this.props.handleDrawer}
                color="inherit"
                sx={{ ...(this.props.open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              Page
            </Typography>
            {this.props.auth.token ? <LogoutButton /> : null}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(Topbar);
