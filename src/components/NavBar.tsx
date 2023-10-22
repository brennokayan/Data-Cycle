import { AppBar, Toolbar, Typography } from "@mui/material";
import TemporaryDrawer from "./DrawerContent";
// import { logout } from "../service/auth";

interface props {
  title: string;
}

export function NavBar({ title }: props) {
  return (
    <>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <TemporaryDrawer title={title} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="inherit"
          >
            {title}
          </Typography>
          {/* <Button variant="contained" onClick={logout}>Sair</Button> */}
        </Toolbar>
      </AppBar>
    </>
  );
}
