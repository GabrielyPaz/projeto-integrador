/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { loginReducer } from '../../reducers/loginReducer'

export const LoginContext = createContext();

const LoginContextProvider = ( {children}) => {
    
    const storeUser = JSON.parse(localStorage.getItem("usuarioLogado"));
    const [state, dispatch] = useReducer(loginReducer, {login: !!storeUser, user: storeUser || null});

    const login = (user) => {
      dispatch({type: 'SET_LOGIN', payload: user})
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