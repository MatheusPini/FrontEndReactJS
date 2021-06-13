//#region
import React from "react";
//#endregion
import { Container } from './style';
import Menu from '../../Components/Menu'
import Body from '../../Components/Body'
import 'react-toastify/dist/ReactToastify.css';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Body />
    </Container>
  );
};
export default Dashboard;

