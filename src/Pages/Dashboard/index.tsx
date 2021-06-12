//#region
import React, { useContext, useState, useEffect } from "react";
//#endregion
import { Container } from './style';
import Menu from '../../Components/Menu'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dashboard = () => {
  return (
    <Container>
      <Menu />
      {/* <Body /> */}
    </Container>
  );
};
export default Dashboard;

