// AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from '../services/firebase.config';

// Define a interface para o contexto de autenticação
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

// Cria o contexto com o tipo definido
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider do contexto de autenticação
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Função para login com email e senha
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // Função para logout
  const logout = async () => {
    await signOut(auth);
  };

  // Renderiza o contexto com os valores atuais
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Função para usar o contexto de autenticação diretamente
// export const useAuthContext = () => useContext(AuthContext);
