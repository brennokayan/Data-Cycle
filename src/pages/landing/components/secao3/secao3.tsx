import { Box } from "@mui/material";
import { CarroselProdutos } from "../CarroselProdutos";

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
          <h1>Nossos produtos</h1>
          <CarroselProdutos />
        </Box>
      </div>
    </>
  );
}
