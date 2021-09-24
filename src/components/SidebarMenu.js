import React, { Component } from "react";

import { Link as RouterLink } from "react-router-dom";
import { ListItem, List } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Box } from "@mui/system";
import { TrendingUp } from "@material-ui/icons";
import FaceIcon from "@material-ui/icons/Face";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import wrappedPages from "../Pages";
const mapNamesToIcons = new Map();
mapNamesToIcons.set("Trending", { icon: <TrendingUp />, order: 1 });
mapNamesToIcons.set("Compare", { icon: <CompareArrowsIcon />, order: 2 });
mapNamesToIcons.set("My Stocks", { icon: <MultilineChartIcon />, order: 3 });
mapNamesToIcons.set("Profile", { icon: <FaceIcon />, order: 4 });
function ListItemLink(props) {
  return <ListItem button component={RouterLink} {...props} />;
}
class SidebarMenu extends Component {
  render() {
    return (
      <Box component={List} display="flex" sx={{flexDirection:"column"}}>
        {wrappedPages.map((p, i) => {
          if (mapNamesToIcons.has(p.name)) {
            return (
              <Box key={i} sx={{ order: mapNamesToIcons.get(p.name).order }}>
                <ListItemLink to={p.path}>
                  <ListItemIcon>
                    {mapNamesToIcons.get(p.name).icon}
                  </ListItemIcon>
                  <ListItemText primary={p.name} />
                </ListItemLink>
              </Box>
            );
          }
        })}
      </Box>
    );
  }
}
export default SidebarMenu;
