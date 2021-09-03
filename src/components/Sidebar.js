import React, { Component } from "react";

import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { ListItem, List } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { ListSubheader } from "@material-ui/core";

import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";
function ListItemLink(props) {
  return <ListItem button component={RouterLink} {...props} />;
}
class Sidebar extends Component {
  render() {
    return (
      <List>
        <ListItemLink to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Main" />
        </ListItemLink>

        <ListItemLink to="/Page_1">
          <ListItemIcon>
            <FileCopyIcon />
          </ListItemIcon>
          <ListItemText primary="Page 1" />
        </ListItemLink>

        <ListItemLink to="/Page_2">
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Page 2" />
        </ListItemLink>
      </List>
    );
  }
}
export default Sidebar;
