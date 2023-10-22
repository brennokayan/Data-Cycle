import { Box, Button } from "@mui/material";


export function Secao3() {
  return (
    <>
      <div id="nossos-produtos">
        <Box
          height={"100vh"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <h1>Formulário</h1>
          <Button onClick={() => {window.location.href=("/login")}}>Enviar</Button>
        </Box>
      </div>
    </>
  );
}
