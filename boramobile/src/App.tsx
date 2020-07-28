import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './hooks/AuthContext';

import Routes from './routes';

const App: React.FC = () => {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#f0f0f5" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    );
};

export default App;