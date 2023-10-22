import { Box } from "@mui/material";
import { Formulario } from "./Formulario/formulario";

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
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={4}
            justifyContent={"center"}
            alignItems={"center"}
            pt={4}
          >
            <h1>Formulário</h1>
            <Formulario />
          </Box>
        </Box>
      </div>
    </>
  );
}
