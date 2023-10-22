import { Box, IconButton, Paper } from "@mui/material";
import imagemConsultoria from "../../assets/consultoria.jpg";
import { DefaultIcons } from "../../constants/DefaultIcons";
export function Consultoria() {
  return (
    <>
      <Box
        height={"100vh"}
        width={"100vw"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        flexDirection={"column"}
        bgcolor={"#d1d1d1"}
      >
        <Paper sx={{ height: "95vh", width: "95vw" }}>
          <Box
            display={"flex"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            px={"15%"}
            gap={2}
            py={10}
          >
            <Box display={"flex"} alignItems={"center"} gap={8}>
              <IconButton onClick={() => {window.location.href=("/")}}>
                <DefaultIcons.VoltarIcon />
              </IconButton>
              <h1>Data Cycle: Sua Rota para o Sucesso</h1>
            </Box>
            <img src={imagemConsultoria} height={"40%"} width={"40%"} />
            <p>
              Na Data Cycle, nossa consultoria especializada é um serviço
              personalizado que proporciona orientação estratégica e soluções
              sob medida. Nossos experientes consultores trabalham em
              colaboração com você para superar desafios e alcançar melhorias
              significativas. Com uma abordagem comprovada e resultados
              mensuráveis, estamos prontos para elevar seu potencial.
            </p>

            <ul>
              <li>
                <strong>Experiência Multissetorial:</strong> Nossos
                especialistas têm profunda experiência em diversos setores,
                oferecendo insights valiosos adaptados ao seu negócio.
              </li>
              <li>
                <strong>Resultados Comprovados:</strong> Ao longo dos anos,
                temos ajudado organizações a superar desafios com eficácia,
                garantindo impacto mensurável.
              </li>
              <li>
                <strong>Colaboração Direta:</strong> Trabalhamos lado a lado com
                sua equipe para alinhar soluções à sua visão e metas.
              </li>
              <li>
                <strong>Soluções Personalizadas:</strong> Cada desafio é único.
                Criamos estratégias sob medida para atender às suas necessidades
                específicas.
              </li>
            </ul>

            <p>
              Vamos iniciar essa jornada de transformação. Agende uma consulta e
              descubra como a Data Cycle pode impulsionar seu sucesso.
            </p>

            <p>
              Juntos, transformaremos desafios em oportunidades e levaremos seu
              negócio a novos patamares de excelência.
            </p>
          </Box>
        </Paper>
      </Box>
      {/* colocar o que a gente vai fazer aqui */}
    </>
  );
}
