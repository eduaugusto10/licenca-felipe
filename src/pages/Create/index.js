import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Input, Container, Title, Button, Text, View } from "../../styleglobal";
import api from "../../services/api";

export default function Create() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [lote, setLote] = useState("");
  const [validate, setValidate] = useState();
  function BackHome() {
    history("/home");
  }

  function SaveData() {
    const data = {
    "name": name,
    "email": email,
    "lote": lote,
    "accountNumber": number,
    "validate": "2023-06-30",
    "password": "eduardo"
    }
    try {
      api
        .post("/user", data, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((result) => {
          BackHome();
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Title>Criar usuário</Title>
      <Text>Nome</Text>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Text>E-mail</Text>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Text>Conta da corretora</Text>
      <Input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Text>Validade</Text>
      <Input
        type="date"
        value={validate}
        onChange={(e) => setValidate(e.target.value)}
      />
      <Text>Lote</Text>
      <Input
        type="number"
        value={lote}
        onChange={(e) => setLote(e.target.value)}
      />
      <View>
        <Button onClick={BackHome}>Voltar</Button>
        <Button onClick={SaveData}>Salvar</Button>
      </View>
    </Container>
  );
}
