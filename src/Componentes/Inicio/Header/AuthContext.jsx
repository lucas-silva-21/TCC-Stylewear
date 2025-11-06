// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ao carregar a aplicação, verifica se há um token/perfil armazenado
    const storedToken = localStorage.getItem('userToken');
    const storedProfile = localStorage.getItem('userProfile');

    if (storedToken && storedProfile) {
      // Opcional: validar o token no backend para garantir que ainda é válido
      setUser(JSON.parse(storedProfile));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    // Armazenar token e perfil no localStorage aqui
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userToken');
    localStorage.removeItem('userProfile');
  };

  // O estado isLoggedIn pode ser derivado do estado 'user'
  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;