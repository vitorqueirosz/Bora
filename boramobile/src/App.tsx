import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './hooks/AuthContext';

import Routes from './routes';

const App: React.FC = () => {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#4C42DB" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    );
};

export default App;