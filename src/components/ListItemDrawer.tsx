import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { IconProps } from "@phosphor-icons/react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface props {
    Icon: React.ComponentType<IconProps>
    text: string;
    route?: string
    size?: number 
}


export function ListItemDrawer({Icon, text, size=22, route =""}: props) {
const navigate = useNavigate();
    return (
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={() => {navigate(route)}}>
        <ListItemIcon>{<Icon size={size}/>}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
