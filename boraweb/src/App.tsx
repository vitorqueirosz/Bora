import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>

      <Routes />
      <ToastContainer />
    </AuthProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
