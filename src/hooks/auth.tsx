import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

interface SignCredencials {
  email: string;
  senha: string;
}

interface AuthContextData {
  user: object;
  signIn(credencials: SignCredencials): Promise<void>;
  signOut(): void;
  loading:boolean;
}
interface AuthState {
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const user = await AsyncStorage.getItem('@GoBarber:user');

      if (user) {
        setData({user:JSON.parse(user)});
      }
      setLoading(false);
    }

    loadStorageData();
  }, [])

  const signIn = useCallback(async ({ email, senha }) => {
    const response = await api.post('session', {
      email,
      senha,
    });

    const  user  = response.data;

    AsyncStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ user });
  }, []);

  const signOut = useCallback(() => {
    AsyncStorage.removeItem('@GoBarber:user');

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Useauth must be used within an AuthProvider');
  }
  return context;
}
