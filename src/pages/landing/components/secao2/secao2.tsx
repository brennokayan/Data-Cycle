import { Box } from "@mui/material";
import { ButtonConhecaNos } from "../buttonConhecaNos/ButtonConhecaNos";

export function Secao2() {
  return (
    <>
      <div id="quem-somos">
        <Box
          height={"100vh"}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          textAlign={"center"}
          borderBottom={"1px solid black"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            {" "}
            <h1>Bem-vindo à Data Cycle</h1>
            <Box textAlign={"justify"} px={4} fontSize={"22px"}>
              <p>
                Somos a Data Cycle, uma empresa especializada na implementação
                de soluções de logística reversa. Nosso foco está em compreender
                o setor tecnológico de produção de insumos e mostrar como
                trabalhar com a logística reversa de forma a transformar
                produtos em fim de vida útil em novos recursos valiosos.
                Acreditamos em oferecer uma solução sustentável para o descarte
                responsável de produtos, evitando impactos negativos ao meio
                ambiente e impulsionando a economia neste setor.
              </p>
            </Box>
          </Box>
          <Box>
            <ButtonConhecaNos
            href="#nossos-produtos"
              cor="black"
              corBorda="white"
              corLetra="white"
              title="Nossos produtos"
            />
          </Box>
        </Box>
      </div>
    </>
  );
}
