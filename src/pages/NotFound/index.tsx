import { Box, Button, Typography } from "@mui/material";
import { logout } from "../../service/auth";

export function NotFoundPage() {
  return (
    <>
      <Box
        height={"100vh"}
        width={"100vw"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"#d1d1d1"}
      >
        <Box
          borderRadius={"10px"}
          height={"70%"}
          width={"80%"}
          bgcolor="white"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Typography variant="h3">Página não encontrada</Typography>
          <Typography >
            Opps!! não encontramos essa página em nosso sistema, por favor
            clique no botão e volte a plataforma.
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              logout();
            }}
          >
            Voltar a Navegar
          </Button>
        </Box>
      </Box>
    </>
  );
}
