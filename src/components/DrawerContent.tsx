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

type Anchor = "left";
interface props {
  title: string;
}
export default function TemporaryDrawer({ title }: props) {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
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

  const list = (anchor: Anchor) => (
    <Box
      width={250}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box p={2}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          gap={4}
        >
          <IconButton onClick={toggleDrawer("left", false)}>
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
      <Button onClick={toggleDrawer("left", true)}>
        <DefaultIcons.MenuIcons color="black" size={28} />
      </Button>
      <Drawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
