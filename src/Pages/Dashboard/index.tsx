//#region
import React from "react";
//#endregion
import { Container } from './style';
import Menu from '../../Components/Menu'
import Body from '../../Components/Body'
import 'react-toastify/dist/ReactToastify.css';
// import { ValidationError } from "yup";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Dashboard: React.FC = () => {
  AOS.init();
  return (
    <Container>
      <Menu />
      <Body/>
    </Container>
  );
};
export default Dashboard;

