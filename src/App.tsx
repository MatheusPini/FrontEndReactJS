import React from 'react';
import Route from './Routes'
import { GlobalStyleAll } from './Styles/GlocalStyles'
import { Container } from './style'
import { ToastContainer } from 'react-toastify';
import StoreProvider from './Components/Store/Provider'
export default function App() {
  return (
    <StoreProvider>
      <Container>
        <Route />
        <ToastContainer />
        <GlobalStyleAll />
      </Container>
    </StoreProvider>

  );
}
