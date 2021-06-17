import React, { useEffect, useState, useContext } from "react"
import { Container } from './style';
import Menu from '../../Components/Menu'
import Body from "../../Components/Body"
import Card from "../../Components/Card"
import Table from "../../Components/Table"
import Axios from 'axios'
import StoreContext from '../../Components/Store/Context'

const Usuarios: React.FC = () => {
  const { token } = useContext(StoreContext)
  const [userList, setUserList] = useState([])
  const requisit = async () => {
    const auth = await Axios.post('http://localhost:3002/usersList', {
      token: token
    })
    if(auth.data.result) {
      console.log("=================")
      setUserList(auth.data.result)
      console.log(auth)
      console.log("=================")
    } else {
      console.log("======nao autenticado===========")
      console.log(auth)
    }
  }
  useEffect(() => {
    requisit()
  }, [])
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

