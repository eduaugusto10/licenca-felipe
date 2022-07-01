import React, { useState, useContext } from "react";
import api from "../../services/api";
import AuthContext from "../../context/auth";
import { login } from "../../services/auth";

import { Input, Container, Title, Button, Text } from "../../styleglobal";

export default function Login() {
  const { signIn } = useContext(AuthContext);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      api.post("/session",
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((result) => {
          signIn(result.data[0].password);
          login(result.data[0].password);
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Container>
      <Title>Login</Title>
      <Text>E-mail</Text>
      <Input
        placeholder="Insira o e-mail"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Text>Senha</Text>
      <Input
        placeholder="Insira a senha"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button onClick={handleSubmit}>Entrar</Button>
    </Container>
  );
}
