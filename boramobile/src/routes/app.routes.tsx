import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchTrips from '../pages/SearchTrips';
import Dashboard from '../pages/Dashboard';
import Trip from '../pages/Trip';


const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator 
    screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f0f0f5' }
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="SearchTrips" component={SearchTrips} />
    <App.Screen name="Trip" component={Trip} />
  </App.Navigator>
);  


export default AppRoutes;