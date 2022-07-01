import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import api from "../../services/api";
import AuthContext from "../../context/auth";
import { Input, Container, Title, Button, Text, View } from "../../styleglobal";

export default function Change() {
  const history = useNavigate();
  const { userID } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [validate, setValidate] = useState("");
  const [lote, setLote] = useState("");

  useEffect(() => {
    try {
      api.get(`/user/${userID}`).then((result) => {
        setName(result.data.name);
        setEmail(result.data.email);
        setNumber(result.data.accountNumber);
        setValidate(result.data.validate);
        setLote(result.data.lote);
      });
    } catch (error) {
      console.log(error);
    }
  },[] );

  function BackHome() {
    history("/home");
  }

  function SaveData() {
    const data = {
    "name": name,
    "email": email,
    "accountNumber": number,
    "validate": validate,
    "lote":lote,
    }
    try {
      api.put(`/user/${number}`, data).then((result) => {
        BackHome();
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Title>Alterar usuário</Title>
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
