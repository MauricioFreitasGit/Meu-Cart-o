import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

interface SignCredencials {
  email: string;
  senha: string;
}

interface AuthContextData {
  nome: string;
  signIn(credencials: SignCredencials): Promise<void>;
  signOut(): void;
  loading:boolean;
}
interface AuthState {
  nome: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const nome = await AsyncStorage.getItem('@GoBarber:nome');

      if (nome) {
        setData({nome:nome})
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
    const { nome } = response.data;
    AsyncStorage.setItem('@GoBarber:nome', nome);

    setData({ nome });
  }, []);

  const signOut = useCallback(() => {
    AsyncStorage.removeItem('@GoBarber:nome');

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ nome: data.nome, signIn, signOut,loading }}>
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
