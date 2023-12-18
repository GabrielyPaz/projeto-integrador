/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext, useEffect } from "react";
import  loginReducer  from '../../reducers/loginReducer'
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(loginReducer, {
    isAuthenticated: false,
    user: null,
    token: null,
  });

  useEffect(() => {
    // Tente obter os dados do usuário do localStorage e atualize o estado se existirem
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      // Decodifique o token para obter os dados do usuário
      const user = jwtDecode(storedToken);

      // Atualize o estado
      dispatch({ type: 'LOGIN', payload: { user, token: storedToken } });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
