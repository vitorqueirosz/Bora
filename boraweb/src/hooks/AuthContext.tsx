import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
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
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {

    const token = localStorage.getItem('@Bora:token');
    const user = localStorage.getItem('@Bora:user');

    if (token && user) {

    //   api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ email, password }) => {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('@Bora:token', token);
      localStorage.setItem('@Bora:user', JSON.stringify(user));

      setData({ token, user });
    }, [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Bora:token');
    localStorage.removeItem('@Bora:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
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
