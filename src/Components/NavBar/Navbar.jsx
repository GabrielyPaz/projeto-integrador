import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from "./Navbar.module.css"; 

const Navbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.item}>
        <Link to="/" className={styles.link}>
          <img src="/public/logo-locadora.png" alt="logo da digital booking" className={styles.image} />
          <span className={styles.text}>Apaixonados por aventuras</span>
        </Link>
      </div>
      {!isMobile && (
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
              <Link to="/login">
                <button className={styles.button}>Iniciar sessão</button>
              </Link>
            </li>
          )}
        </ul>
      )}
      {isMobile && (
        <div className={styles.menuIcon} onClick={handleMenuToggle}>
          ☰ {/* Ícone do menu hambúrguer */}
        </div>
      )}
      {isMobile && isMenuOpen && (
        <div className={styles.mobileMenu}>
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
                <Link to="/login">
                  <button className={styles.button}>Iniciar sessão</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;