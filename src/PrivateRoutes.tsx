// PrivateRoutes.tsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './contexts/AuthEmailProvider';

export const PrivateRoutes: React.FC = () => {
  const authContext = useContext(AuthContext);

  // Verifica se o authContext está disponível e se os dados de autenticação estão sendo carregados
  if (!authContext) {
    console.error('AuthContext não está disponível.');
    return null; // Retorna null ou algum componente de fallback se o contexto não estiver disponível
  }

  const { user, loading } = authContext;

  if (loading) {
    // Pode retornar um spinner ou um componente de carregamento
    return <div>Carregando dados de autenticação...</div>;
  }

  // Se o usuário estiver autenticado, renderiza o componente filho; caso contrário, redireciona para a página de login
  return user ? <Outlet /> : <Navigate to="/login" />;
};
