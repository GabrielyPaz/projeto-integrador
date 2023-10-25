import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css"; 

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-login" id="navbar-login">
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/register">Criar conta</Link>
          </li>
          <li className={styles.item}>
            <Link to="/login">Iniciar sessão</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;