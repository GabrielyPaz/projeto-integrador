/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { loginReducer } from '../../reducers/loginReducer'

export const LoginContext = createContext();

const LoginContextProvider = ( {children}) => {
    
    const [state, dispatch] = useReducer(loginReducer, {login: !!localStorage.getItem("usuarioLogado")});

    const login = () => {
      dispatch({type: 'SET_LOGIN'})
    }

    const logout = () => {
      dispatch({type: 'SET_LOGOUT'})
      localStorage.removeItem("usuarioLogado");
    }

    return (
    <LoginContext.Provider value={ {state, login, logout} }>
        { children }
    </LoginContext.Provider>
  )
}

export default LoginContextProvider;