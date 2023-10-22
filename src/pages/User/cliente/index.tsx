import { Box } from "@mui/material";
import { GraficoLinear } from "./componets/graficBar";
import { NavBar } from "../../../components/NavBar";

export function ClientHomePage() {
  return (
    <>
      <Box>
        {" "}
        <NavBar title={"Dashboard"}/>
        <Box textAlign={"center"} mt={4}>
          <h1>Gráficos de Produtos Coletados</h1>
        </Box>
        <Box
          display={"flex"}
          gap={4}
          width={"100vw"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          mt={2}
        >
          <GraficoLinear title="Janeiro/2023" />
          <GraficoLinear title="Fevereiro/2023" />
        </Box>
      </Box>
    </>
  );
}
