import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';
import styles from "./Navbar.module.css";
import { IoMenu, IoClose  } from "react-icons/io5";
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter  } from "react-icons/si";


const Navbar = () => {
  const location = useLocation();
  const [menuLateral, setMenuLateral] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // Verifica se há um valor de login no localStorage quando o componente é montado
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setLogin(isLoggedIn);
  }, []); // O array vazio assegura que isso só aconteça uma vez, quando o componente é montado

  const showMenu = () => setMenuLateral(!menuLateral);


 const handleLogout = () => {
    // Lógica para fazer logout, se necessário
    // Por exemplo, você pode chamar uma API para invalidar a sessão do usuário
    // Em seguida, alterar o estado para `false` para mostrar "Login" novamente
    setLogin(false);
    // Salva o estado de login como falso no localStorage ao fazer logout
    localStorage.setItem('isLoggedIn', 'false');
    // Outras lógicas de logout, se necessário
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.item}>
        <Link to="/" className={styles.link}>
          <img src="/public/logo-site.svg" alt="logo da digital cars" className={styles.image} />
          <span className={styles.text}>Paixão pela estrada</span>
        </Link>
      </div>
        <ul className={styles.list}>
          {location.pathname !== '/register' && (
            <li className={styles.item}>
              <Link to="/register">
                <button className={styles.button}>Criar conta</button>
              </Link>
            </li>
          )}
          {location.pathname !== '/login' && (
        <li className={styles.item}>
          {login ? (
            <button className={styles.button} onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">
              <button className={styles.button}>Iniciar sessão</button>
            </Link>
          )}
        </li>
      )}
        </ul>

        <div className={styles.menuHamburger}>
                <IoMenu className={styles.menu} size={28} onClick={showMenu}/>
            </div>

            <nav className={ menuLateral ? `${styles.menuLateral} ${styles.ativo}` : styles.menuLateral}>
                <div className={styles.menuHeader}>
                    <IoClose className={styles.closeButton} size={22} onClick={showMenu}/>
                    <h4 className={styles.menuTitle}> MENU </h4>
                </div>
                <div className={styles.menuBody}>
                    <div className={styles.menuButtons}>
                    {location.pathname !== '/register' && (
                        <Link to="/register "> <button className={styles.buttonItem}> Criar Conta </button> </Link>
                        )}

                        <hr color="black" width="90%" size="1" className={`${styles.linha} ${location.pathname === '/register' || location.pathname === '/login' ? styles.hidden : ''}`} />
                        {location.pathname !== '/login' && (
                        <Link to="/login"> <button className={styles.buttonItem}>  Fazer login </button> </Link> )}

                    </div>
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