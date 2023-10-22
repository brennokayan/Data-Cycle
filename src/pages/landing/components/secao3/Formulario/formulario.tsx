import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

export function Formulario() {
  const [respostas, setRespostas] = useState({
    resposta1: "",
    resposta2: "",
    resposta3: "",
    resposta4: "",
    resposta5: "",
  });
  const handleSubmit = (event: React.FormEvent) => {
    const data_ = JSON.stringify(respostas);
    event.preventDefault();
    console.log(data_);
    alert("Formulário enviado com sucesso!");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box display={"grid"} gridTemplateColumns={"auto"} px={2} gap={2}>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <p>
              1 - Como as peças defeituosas ou danificadas são atualmente
              gerenciadas em sua empresa?{" "}
            </p>
            <TextField
              label="Resposta 1"
              fullWidth
              onChange={(event) => {
                setRespostas({ ...respostas, resposta1: event.target.value });
              }}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <p>
              2 - Existe um processo estabelecido para identificar, classificar
              e separar peças que podem ser reutilizadas ou recicladas?
            </p>
            <TextField
              label="Resposta 2"
              fullWidth
              onChange={(event) => {
                setRespostas({ ...respostas, resposta2: event.target.value });
              }}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <p>
              3 - Quais são os critérios para determinar se uma peça deve ser
              descartada, reparada, recondicionada ou reciclada?
            </p>
            <TextField
              label="Resposta 3"
              fullWidth
              onChange={(event) => {
                setRespostas({ ...respostas, resposta3: event.target.value });
              }}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <p>
              4 - Como é feita a coleta e armazenamento de peças antigas ou não
              utilizadas? Existe um inventário claro dessas peças?
            </p>
            <TextField
              label="Resposta 4"
              fullWidth
              onChange={(event) => {
                setRespostas({ ...respostas, resposta4: event.target.value });
              }}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <p>
              5 - Há parcerias estabelecidas com empresas especializadas em
              reciclagem de peças de tecnologia? Em caso afirmativo, como é
              feita essa colaboração?
            </p>
            <TextField
              label="Resposta 5"
              fullWidth
              onChange={(event) => {
                setRespostas({ ...respostas, resposta5: event.target.value });
              }}
            />
          </Box>
          {/* <Box display={"flex"} flexDirection={"column"} gap={1}>
          <p>
            7 - Quais são os desafios mais significativos enfrentados pela
            empresa em relação à logística reversa de peças de tecnologia?
          </p>
          <TextField label="Resposta 6" fullWidth />
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <p>
            8 - Existe um sistema para rastrear o fluxo de peças de tecnologia
            retornadas desde o ponto de coleta até o seu destino final?
          </p>
          <TextField label="Resposta 7" fullWidth />
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <p>
            9 - Como a empresa garante a conformidade com as regulamentações
            locais e internacionais relacionadas ao descarte de resíduos
            eletrônicos?
          </p>
          <TextField label="Resposta 8" fullWidth />
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          {" "}
          <p>
            10 - Há alguma iniciativa em andamento para promover a
            conscientização dos clientes sobre a importância da devolução e
            reciclagem adequadas de peças de tecnologia?
          </p>
          <TextField label="Resposta 9" fullWidth />
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <p>
            11 - A empresa está disposta a adotar as soluções propostas e
            reavaliar a gestão com base nos indicadores apresentados?
          </p>
          <TextField label="Resposta 10" fullWidth />
        </Box> */}
        </Box>
        <Box
          mt={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button variant={"contained"} type="submit">
            Enviar
          </Button>
        </Box>
      </form>
    </>
  );
}
