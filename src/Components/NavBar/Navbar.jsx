import styles from "./Navbar.module.css";
import { useState, useContext, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
import { useAuth } from "../../contexts/LoginContext/LoginContext";

const Navbar = () => {
  const location = useLocation();
  const [menuMobile, setMenuMobile] = useState(false);

  const navigate = useNavigate();
  const { authState, dispatch } = useAuth();

  const { isAuthenticated, user, token } = authState;

  const [isAdmin] = useState(user ? user?.funcao?.nome : null);
  const [userId] = useState(user ? user.id : null);

  const handleLogout = () => {
    // Despacha a ação de LOGOUT
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  useEffect(() => {
    console.log(
      "Navbar - useEffect - Is Autenticado:",
      authState.isAuthenticated
    );
    if (authState.isAuthenticated && authState.user) {
      console.log("Navbar - useEffect - Autenticado!");
      const now = new Date().getTime() / 1000;
      const expiration = Math.floor(authState.user.exp);
      if (now > expiration) {
        handleLogout();
      }
    }
  }, [authState.isAuthenticated, authState.user, handleLogout]);

  console.log("Nome:", authState.user?.nome); // Adicione este log
  console.log("Sobrenome:", authState.user?.sobrenome); // Adicione este log

  const exibirMenu = () => setMenuMobile(!menuMobile);

  return (
    <header className={styles.navbar}>
      <div className={styles.item}>
        <Link to="/" className={styles.link}>
          <img
            src="/logo-site.svg"
            alt="logo da digital cars"
            className={styles.image}
          />
          <span className={styles.text}>Paixão pela estrada</span>
        </Link>
      </div>

      {isAuthenticated ? (
        <div className={styles.loginArea}>
          <div className={styles.reservaArea}>
            {isAdmin === "admin"
              ? location.pathname !== "/admin" && (
                  <Link to="/admin" className={styles.linkReserva}>
                    <h3>Administrar</h3>
                  </Link>
                )
              : location.pathname !== `/${user.id}/reservas` && (
                  <Link
                    to={`/${user.id}/reservas`}
                    className={styles.linkReserva}
                  >
                    <h3>Minhas Reservas</h3>
                  </Link>
                )}
          </div>

          <div className={styles.loginAvatar}>
            {user?.nome.charAt(0).toUpperCase()}
            {user?.sobrenome.charAt(0).toUpperCase()}
          </div>
          <div className={styles.loginText}>
            <p> Olá, </p>
            <strong>
              {user.nome} {user.sobrenome}
            </strong>
          </div>
          <button className={styles.buttonLogout} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <ul className={styles.list}>
          {location.pathname !== "/register" && (
            <li className={styles.item}>
              <Link to="/register">
                <button className={styles.buttonNav}>Criar conta</button>
              </Link>
            </li>
          )}

          {location.pathname !== "/login" && (
            <li className={styles.item}>
              <Link to="/login">
                <button className={styles.buttonNav}>Iniciar sessão</button>
              </Link>
            </li>
          )}
        </ul>
      )}

      <div className={styles.menuHamburger}>
        <TfiMenu className={styles.menu} size={28} onClick={exibirMenu} />
      </div>

      <nav
        className={
          menuMobile
            ? `${styles.menuMobile} ${styles.ativo}`
            : styles.menuMobile
        }
      >
        <div className={styles.menuSuperior}>
          <IoClose
            className={styles.closeButton}
            size={22}
            onClick={exibirMenu}
          />

          {isAuthenticated ? (
            <div className={styles.menuSuperiorLogado}>
              <div className={styles.menuAvatar}>
                {user?.nome.charAt(0).toUpperCase()}
                {user?.sobrenome.charAt(0).toUpperCase()}
              </div>
              <div className={styles.menuText}>
                <p> Olá, </p>
                <strong>
                  {user.nome} {user.sobrenome}
                </strong>
              </div>
            </div>
          ) : (
            <h4 className={styles.menuTitle}> MENU </h4>
          )}
        </div>

        <div className={styles.menuInferior}>
          {isAuthenticated ? (
            <div className={styles.menuLoginArea}>
              <div className={styles.linkReservaLoginArea}>
                {isAdmin === "admin"
                  ? location.pathname !== "/admin" && (
                      <Link to="/admin" className={styles.linkReserva}>
                        <h3>Administrar</h3>
                      </Link>
                    )
                  : location.pathname !== `/${user.id}/reservas` && (
                      <Link
                        to={`/${user.id}/reservas`}
                        className={styles.linkReservaLoginArea}
                      >
                        <h3>Minhas Reservas</h3>
                      </Link>
                    )}
              </div>

              <p>
                Deseja <span onClick={handleLogout}>encerrar a sessão</span>?
              </p>
              <hr color="black" width="100%" size="1" />
            </div>
          ) : (
            <div className={styles.menuButtons}>
              {location.pathname !== "/register" && (
                <Link to="/register ">
                  {" "}
                  <button className={styles.buttonItem}>
                    {" "}
                    Criar Conta{" "}
                  </button>{" "}
                </Link>
              )}
              <hr
                color="black"
                width="90%"
                size="1"
                className={` ${
                  location.pathname === "/register" ||
                  location.pathname === "/login"
                    ? styles.hidden
                    : ""
                }`}
              />
              {location.pathname !== "/login" && (
                <Link to="/login">
                  {" "}
                  <button className={styles.buttonItem}>
                    {" "}
                    Fazer login{" "}
                  </button>{" "}
                </Link>
              )}
            </div>
          )}
          <div>
            <ul className={styles.lista}>
              <li>
                <SiFacebook size={24} />
              </li>
              <li>
                <SiInstagram size={24} />
              </li>
              <li>
                <SiLinkedin size={24} />
              </li>
              <li>
                <SiTwitter size={24} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
