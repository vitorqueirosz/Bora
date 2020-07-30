import React, {
  createContext, useCallback, useState, useContext, useEffect
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface User {
    id: string;
    avatar: string;
    name: string;
    email: string;
    password: string;
    whatsapp: string;
    city: string;
    uf: string;
    user: User;
}

interface AuthContextData {
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    (
        async function loadStorageData(): Promise<void> {
            const [token, user] = await AsyncStorage.multiGet([
                '@Bora:token',
                '@Bora:user'
            ]);

            if (token[1] && user[1]) {
                setData({ token: token[1], user: JSON.parse(user[1]) })
            }

            setLoading(false);
        }
    )();
  }, []);

  const signIn = useCallback(
    async ({ email, password }) => {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      await AsyncStorage.multiSet([
          ['@Bora:token', token],
          ['@Bora:user', JSON.stringify(user)]
      ]);

      setData({ token, user });
      
    }, [],
  );

  const signOut = useCallback( async () => {
    await AsyncStorage.multiRemove([
        '@Bora:token',
        '@Bora:user'
    ]);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
