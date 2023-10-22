import { Box } from "@mui/material";
import { NavBar } from "../../../components/NavBar";
import { Formulario } from "../../landing/components/secao3/Formulario/formulario";

export function ClientHomePage() {
  return (
    <>
      <Box>
        {" "}
        <NavBar title={"Questionário"} />
        <Box my={4} display={"flex"} alignItems={"center"} flexDirection={"column"} gap={4}>
          <h1>Questionário</h1>
          <Formulario />
        </Box>
      </Box>
    </>
  );
}
