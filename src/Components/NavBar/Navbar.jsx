import styles from './Navbar.module.css'
import { useState, useContext} from 'react';
import { LoginContext } from '../../contexts/LoginContext/LoginContext';
import { IoClose  } from "react-icons/io5";
import { TfiMenu  } from "react-icons/tfi";
import { Link, useLocation } from 'react-router-dom';
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter  } from "react-icons/si";

const Navbar = () => {
  const location = useLocation();
  const [menuMobile, setMenuMobile] = useState(false);
  const { state, logout } = useContext(LoginContext);
  const exibirMenu = () => setMenuMobile(!menuMobile);

  return (
    <header className={styles.navbar}>
      <div className={styles.item}>

        <Link to="/" className={styles.link}>
          <img src="/public/logo-site.svg" alt="logo da digital cars" className={styles.image} />
          <span className={styles.text}>Paixão pela estrada</span>
        </Link>

      </div>

      { state.login && state.user ? (
        
        <div className={styles.loginArea}>
           <div className={styles.loginAvatar}> {state.user.nome.charAt(0).toUpperCase()}{state.user.sobrenome.charAt(0).toUpperCase()} </div>
        <div className={styles.loginText}> 
            <p> Olá, </p>
            <strong> {state.user.nome} {state.user.sobrenome} </strong>
        </div>
        <button className={styles.buttonLogout} onClick={()=> logout()}> Logout </button>
        </div> 
      ) : (
        <ul className={styles.list}>
          {location.pathname !== '/register' && (
           <li className={styles.item}>
             <Link to="/register">
             <button className={styles.buttonNav}>Criar conta</button>
             </Link>
          </li>
          )}

          {location.pathname !== '/login' && (
            <li className={styles.item}>
              <Link to="/login">
               <button className={styles.buttonNav}>Iniciar sessão</button>
             </Link>
            </li>
          )}
        </ul> 
        ) }
    
         <div className={styles.menuHamburger}>
          <TfiMenu className={styles.menu} size={28} onClick={exibirMenu}/>
         </div>
  
         <nav className={ menuMobile ? `${styles.menuMobile} ${styles.ativo}` : styles.menuMobile}>
          
          <div className={styles.menuSuperior}>
           <IoClose className={styles.closeButton} size={22} onClick={exibirMenu}/>
           
           { state.login && state.user ? (  <div className={styles.menuSuperiorLogado}>
             <div className={styles.menuAvatar}> {state.user.nome.charAt(0).toUpperCase()}{state.user.sobrenome.charAt(0).toUpperCase()} </div>
               <div className={styles.menuText}> 
                <p> Olá, </p>
                  <strong> {state.user.nome} {state.user.sobrenome} </strong>
                    </div>  
                      </div> ) : (
                    
             <h4 className={styles.menuTitle}> MENU </h4> )}
           </div>
          
          <div className={styles.menuInferior}>
          
          { state.login ? (

          <div className={styles.menuLoginArea}>
            <p> Deseja <span onClick={()=> logout()}> encerrar a sessão </span> ? </p>
            <hr color="black" width="100%" size="1" />
         </div> 
          ) : (            
             <div className={styles.menuButtons}>
                  {location.pathname !== '/register' && (
                    <Link to="/register "> <button className={styles.buttonItem}> Criar Conta </button> </Link>
                  )}
                    <hr color="black" width="90%" size="1" className={` ${location.pathname === '/register' || location.pathname === '/login' ? styles.hidden : ''}`} />
                  {location.pathname !== '/login' && (
                    <Link to="/login"> <button className={styles.buttonItem}>  Fazer login </button> </Link> )}
                </div>
                )}
                    <div>
                        <ul className={styles.lista}>
                            <li>
                              <SiFacebook size={24}/>
                            </li>
                            <li>
                              <SiInstagram size={24}/>
                            </li>
                            <li>
                              <SiLinkedin size={24}/>
                            </li>
                            <li>
                              <SiTwitter size={24}/>
                            </li>
                        </ul>
                    </div>
                </div>   
            </nav>
    </header>
  );
};

export default Navbar;