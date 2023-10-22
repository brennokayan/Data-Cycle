import { Box, Button, TextField } from "@mui/material";
import logoVazio from "../../assets/1.png";
import { UserLogin } from "../../Types/UserLogin";
import { useState } from "react";
import { login } from "../../service/auth";

export function LoginPage() {
  const [userData, setUserData] = useState<UserLogin>({
    email: "",
    password: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login("acessToken");
    window.location.href = "/user/";
  };
  return (
    <>
      <Box
        height={"100vh"}
        width={"100vw"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"#d1d1d1"}
      >
        <Box
          height={"80%"}
          width={{ xs: "90%", md: "60%", lg: "60%" }}
          bgcolor={"white"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"10px"}
        >
          <Box
            component={"img"}
            src={logoVazio}
            height={{ xs: "35%", sm: "35%", md: "45%", lg: "45%" }}
          />
          <form onSubmit={handleSubmit}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              width={"100%"}
            >
              <TextField
                fullWidth
                label="Usuário - Email"
                type={"email"}
                onChange={(event) => {
                  setUserData({ ...userData, email: event.target.value });
                }}
              />
              <TextField
                label="Senha"
                type={"password"}
                onChange={(event) => {
                  setUserData({ ...userData, password: event.target.value });
                }}
              />
              <Button variant={"contained"} type={"submit"}>
                Entrar
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
