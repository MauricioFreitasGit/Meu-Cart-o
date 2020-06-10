import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SingUp from '../pages/SingUp';
import home from '../pages/Home';

const Auth = createStackNavigator();

export default function AuthRoutes() {
  console.log("deslogado")

  return (
    <Auth.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        gestureEnabled:false,
        cardStyle: {backgroundColor: '#312e38'},
      }}>
      <Auth.Screen  name="home" component={home} />
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SingUp} />
    </Auth.Navigator>
  );
}
