import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/Home';
const Auth = createStackNavigator();

const AppRoutes: React.FC = () =>(
    <Auth.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{backgroundColor:'#312e38'},
        }}
    >
        <Auth.Screen  name="SignIn" component={SignIn}/>
    </Auth.Navigator>
)

 export default AppRoutes;
