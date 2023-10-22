import { Box } from "@mui/material";
// import logo1 from "../../assets/logo1.jpg";
import logo2 from "../../assets/logo2.jpg";
import { ButtonConhecaNos } from "./components/buttonConhecaNos/ButtonConhecaNos";

export function LandingPage() {
  return (
    <>
    <div id="Home">
      <Box
        height={"100vh"}
        width={"100%"}
        display={"flex"}
        alignItems={{xs: "start", sm: "start", md: "center", lg: "center", xl: "center"}}
        justifyContent={"space-evenly"}
        textAlign={"left"}
        bgcolor={"black"}
        flexDirection={"column"}

        
      >
        <Box component={"img"} src={logo2} height={{xs:"50%", sm: "50%", lg: "40%"}} width={{xs: "100%", sm: "100%", lg: "20%"}}>

        </Box>
        <Box width={{xs: "75%", sm: "75%", lg: "50%"}} height={"auto"}  px={2}>
          <p
            style={{
              color: "white",
              fontSize: "28px",
            //   fontFamily: "fantasy",
              letterSpacing: "2px",
            }}
          >
            Data Cycle, o poder dos dados renovando modos de gestão, construa um
            novo ciclo.
          </p>
        </Box>
          <Box width={"100%"} display={"flex"}
          alignItems={"center"} justifyContent={"center"} gap={2}>
            <ButtonConhecaNos href="/consultoria" cor="white" corLetra="black" corBorda="black" title="Consultoria" />
            <ButtonConhecaNos href="/logistica-reversa" cor="white" corLetra="black" corBorda="black" title="Logistica reversa" />
            <ButtonConhecaNos href="/login" cor="white" corLetra="black" corBorda="black" title="Login" />
          </Box>
      </Box>
      </div>
    </>
  );
}
