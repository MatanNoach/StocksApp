import { Component } from "react";
import LogoutButton from "./LogoutButton";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/system";
import { createTheme, IconButton, Toolbar, Typography,Box } from "@mui/material";
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
        <Box sx={{display:"flex"}}>
          <AppBar
            position="fixed"
            open={this.props.open}
            drawerWidth={this.props.drawerWidth}
            sx={{ flexGrow: 1 }}
          >
            <Toolbar>
              <IconButton
                onClick={this.props.handleDrawer}
                color="inherit"
                edge="start"
                sx={{ mr: 2, ...(this.props.open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{flexGrow: 1 }}
              >
                Page
              </Typography>
              {this.props.auth.token ? <LogoutButton /> : (
              <Button variant="contained" color="secondary" href="/myStocks">
                Login
              </Button>
              )}
            </Toolbar>
          </AppBar>
        </Box>
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
