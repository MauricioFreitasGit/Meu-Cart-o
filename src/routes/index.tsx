import React, { useEffect, useState } from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native'

const Routes: React.FC = () => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadStorageData() {
      const usuario = AsyncStorage.getItem('user').then((response) => {

        response != null ? setUser(true) : setUser(false);
        setLoading(false);
        console.log(response);
      }
      ).catch((error) => {
        console.log(error)
      })
    }
    loadStorageData();
  }, [user]);

  if (loading != true) {
    return user != false ? <AppRoutes /> : <AuthRoutes />
  }else{
  return <ActivityIndicator color="#999" size="large" />
  }
}

export default Routes;