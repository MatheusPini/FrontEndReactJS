import React from "react";
import { Container } from './style';
import Menu from '../../Components/Menu'
import Body from '../../Components/Body'
import Card from "../../Components/Card";
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Dashboard: React.FC = () => {
  AOS.init();
  return (
    <Container>
      <Menu />
      <Body>
          <Card getAltura={250} getLargura={100} typeAltura={"px"} typeLargura={"%"}>
            <h3>Dashboard</h3>
          </Card>
          <Card getAltura={450} getLargura={800} typeAltura={"px"} typeLargura={"px"}>
            <div id="idGrafics">

            </div>
          </Card>
          <Card getAltura={400} getLargura={600} typeAltura={"px"} typeLargura={"px"}>
            <div id="idGraficsBar">

            </div>
          </Card>
      </Body>
    </Container>
  );
};
export default Dashboard;

