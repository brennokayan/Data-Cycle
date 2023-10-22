import { Avatar, Box } from "@mui/material";
import { NavBar } from "../../../components/NavBar";

export function ProfilePage() {
  return (
    <>
    <NavBar title={""}/>
      <Box
        height={"100vh"}
        width={"100vw"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={"#d1d1d1"}
      >
        <Box
          bgcolor={"white"}
          height={"70%"}
          width={"80%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Avatar sx={{height: "150px", width: "150px"}}/>
          <Box display={"grid"} gridTemplateColumns={"auto auto"}>
            <p>Nome</p> 
            <p>CNPJ</p>
            <p>Telefone</p>

          </Box>
        </Box>
      </Box>
    </>
  );
}
