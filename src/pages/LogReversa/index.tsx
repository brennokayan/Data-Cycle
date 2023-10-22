import { Box, Paper } from "@mui/material";
import imagemLogistica from "../../assets/logistica-reversa-1.jpg"
export function LogReversa() {
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
        <Paper sx={{ height: "90vh", width: "95vw" }}>
          <Box
            display={"flex"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            px={"15%"}
            gap={2}
          >
            <h1>Logística Reversa: Soluções Eficientes</h1>
            <img src={imagemLogistica} height={"40%"} width={"40%"}/>
            <p>
              Nossa expertise em logística reversa oferece soluções eficazes
              para a gestão sustentável de produtos e materiais pós-consumo. Com
              processos otimizados, ajudamos sua empresa a reduzir impactos
              ambientais e a maximizar o valor de seus recursos.
            </p>

            <ul>
              <li>
                <strong>Reutilização e Reciclagem:</strong> Implementamos
                estratégias para reintegrar materiais ao ciclo produtivo ou
                reciclá-los de forma responsável.
              </li>
              <li>
                <strong>Compliance Ambiental:</strong> Garantimos que suas
                operações estejam em conformidade com regulamentações ambientais
                vigentes.
              </li>
              <li>
                <strong>Otimização de Processos:</strong> Identificamos
                oportunidades para melhorar a eficiência e reduzir custos na
                gestão de resíduos.
              </li>
            </ul>

            <p>
              Trabalhe conosco para criar uma cadeia de suprimentos mais
              sustentável e alinhada com os princípios da economia circular.
            </p>

            <p>
              Juntos, transformaremos desafios em oportunidades e levaremos sua
              logística reversa a um novo patamar de excelência.
            </p>
          </Box>
        </Paper>
      </Box>
      {/* colocar o que a gente vai fazer aqui */}
    </>
  );
}
