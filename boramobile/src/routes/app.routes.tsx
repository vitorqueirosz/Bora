import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator 
    screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f0f0f5' }
    }}
  >
    <App.Screen name="SignIn" component={Dashboard} />
  </App.Navigator>
);  


export default AppRoutes;