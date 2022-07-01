import React, { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth";

import {
  Button,
  MicroButton,
  Text,
  Div,
  List,
} from "../../styleglobal";

export default function Home() {
  const [customers, setCustomers] = useState([]);
  const history = useNavigate();
  const { changeUser } = useContext(AuthContext);

  useEffect(() => {
    try {
      api.get("/user").then((result) => {
        setCustomers(result.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  function CreateUser() {
    history("/create");
  }
  function ChangeUser(e) {
    changeUser(e);
    history("/change");
  }

  return (
    <div>
      <Button onClick={CreateUser}>Criar usuário</Button>
      {customers &&
        customers.map((customer, index) => (
          <List key={index}>
            <Div>
              <Text>
                {customer.name}
                <br />
                Nome
              </Text>
            </Div>
            <Div>
              <Text>
                {customer.email}
                <br />
                E-mail
              </Text>
            </Div>
            <Div>
              <Text>
                {customer.accountNumber}
                <br />
                Conta corretora
              </Text>
            </Div>
            <Div>
              <Text>
                {customer.lote}
                <br />
                Lote
              </Text>
            </Div>
            <Div>
              <Text>
                {customer.validate}
                <br />
                Validade
              </Text>
            </Div>
            <Div>
              <MicroButton
                onClick={() => {
                  ChangeUser(customer.accountNumber);
                }}
              >
                Alterar
              </MicroButton>
            </Div>
          </List>
        ))}
    </div>
  );
}
