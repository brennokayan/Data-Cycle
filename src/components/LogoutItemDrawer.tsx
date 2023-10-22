import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { IconProps } from "@phosphor-icons/react";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { logout } from "../service/auth";

interface props {
    Icon: React.ComponentType<IconProps>
    text: string;
    size?: number 
}


export function LogoutItemDrawer({Icon, text, size=22}: props) {
// const navigate = useNavigate();
    return (
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={() => {logout()}}>
        <ListItemIcon>{<Icon size={size}/>}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
