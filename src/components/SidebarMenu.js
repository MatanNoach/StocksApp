import React, { Component } from "react";

import { Link as RouterLink } from "react-router-dom";
import { ListItem, List } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";

import { TrendingUp } from "@material-ui/icons";
import FaceIcon from "@material-ui/icons/Face";
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
function ListItemLink(props) {
  return <ListItem button component={RouterLink} {...props} />;
}
class SidebarMenu extends Component {
  render() {
    return (
      <List>
        <ListItemLink to="/">
          <ListItemIcon>
            <TrendingUp />
          </ListItemIcon>
          <ListItemText primary="Trending" />
        </ListItemLink>

        <ListItemLink to="/compare">
          <ListItemIcon>
            <CompareArrowsIcon />
          </ListItemIcon>
          <ListItemText primary="Compare" />
        </ListItemLink>

        <ListItemLink to="/profile">
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemLink>
      </List>
    );
  }
}
export default SidebarMenu;
