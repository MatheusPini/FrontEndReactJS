import React, { useEffect, useState } from "react"
import { Container } from './style';
import Menu from '../../Components/Menu'
import Body from "../../Components/Body"
import Card from "../../Components/Card"
import Table from "../../Components/Table"
const Usuarios: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Body>
        <Card getAltura={250} getLargura={100} typeAltura={"px"} typeLargura={"%"}>
          <h3>Usuários</h3>
        </Card>
        <Card getAltura={100} typeAltura={"auto"} getLargura={100} typeLargura={"%"}>
          <Table>dsa</Table>
        </Card>
      </Body>
    </Container>
  );
};
export default Usuarios;

