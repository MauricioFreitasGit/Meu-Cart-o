import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const App = createStackNavigator();

export default function AppRoutes() {
  console.log("logado")
  return (
    <App.Navigator
    initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled:false,
        cardStyle: {backgroundColor: '#312e38'},
      }}>
      <App.Screen name="Home"  component={Home} />
      <App.Screen name="SignIn" component={SignIn} />
    </App.Navigator>
  );
}
