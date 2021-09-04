import{ Component } from "react";
import SidebarMenu from "./SidebarMenu";
import { ChevronLeft } from "@material-ui/icons";
import { Divider, IconButton, Drawer, Typography } from "@material-ui/core";

class Sidebar extends Component {
  render() {
    return (
      <Drawer
        classes={{ paper: this.props.styleClasses.drawerPaper }}
        varient="permanent"
        open={this.props.open}
      >
        <div className={this.props.styleClasses.sidebarIcon}>
          <IconButton onClick={this.props.handleDrawer}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Typography component="h1" variant="h6" noWrap style={{textAlign:"center"}}>
            Menu
        </Typography>
        <Divider />
        <SidebarMenu />
      </Drawer>
    );
  }
}
export default Sidebar;
