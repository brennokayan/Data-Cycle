import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { DefaultIcons } from "../constants/DefaultIcons";
import { ListItemDrawer } from "./ListItemDrawer";
import { IconButton, Typography } from "@mui/material";
import { LogoutItemDrawer } from "./LogoutItemDrawer";

interface props {
  title: string;
}
export default function TemporaryDrawer({ title }: props) {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box
      width={250}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer( false)}
    >
      <Box p={2}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          gap={4}
        >
          <IconButton onClick={toggleDrawer(false)}>
            <DefaultIcons.VoltarIcon size={22} color="black" />
          </IconButton>
          <Typography textAlign={"center"}>{title}</Typography>
        </Box>
      </Box>
      <List>
        <ListItemDrawer
          size={28}
          text="Dashboard"
          route="/user/"
          Icon={DefaultIcons.DashboardIcosn}
        />
        <ListItemDrawer
          size={28}
          text="Perfil"
          route="/profile"
          Icon={DefaultIcons.UsuarioIcon} />
      </List>
      <Divider />
      <List>
        <LogoutItemDrawer text="Sair" Icon={DefaultIcons.LogoutIcon} />
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer( true)}>
        <DefaultIcons.MenuIcons color="black" size={28} />
      </Button>
      <Drawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer( false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
