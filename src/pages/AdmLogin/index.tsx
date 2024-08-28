// Login.tsx
import React, { useState, FormEvent, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthEmailProvider';
import { useNavigate } from 'react-router-dom';
import { AdmLoginContainer } from './styles';
import { House } from '@phosphor-icons/react';

export const AdmLogin: React.FC = () => {
  const authContext = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (authContext) {
      try {
        await authContext.login(email, password);
        alert('Login realizado com sucesso!');
        navigate("/budgets-panel");
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        setError('Falha ao fazer login. Verifique suas credenciais.');
      }
    } else {
      setError('O contexto de autenticação não está disponível.');
    }
  };

  return (
    <AdmLoginContainer>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="bg" />

      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>

        <House 
          size={32} 
          weight="duotone" 
          onClick={() => navigate('/')}
        />
      </form>
    </AdmLoginContainer>
  );
};
