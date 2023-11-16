import { useState, useContext } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext/LoginContext";

// ========= ANDRE ===========
import eye from "../../assets/eye.svg";
import eyeslash from "../../assets/eye-slash.svg";

const Login = () => {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  const onChangeUserEmail = (e) => setUserEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  // ========= ANDRE ===========
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitInfo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const registros = JSON.parse(localStorage.getItem("registros"));
    const existRegister = !!localStorage.getItem("registros");

    if (existRegister) {
      const searchUser = registros.find(
        (record) =>
          record.email === data.email && record.password === data.password
      );

      if (searchUser) {
        searchUser.name;

        alert("Login efetuado com sucesso!");
        // localStorage.setItem('Está logado!', false);
        localStorage.setItem("usuarioLogado", JSON.stringify(searchUser));
        login(searchUser);
        navigate("/");
      } else {
        alert("Informações inválidas. Tente novamente!");
        setFormError(true);
      }
    } else {
      alert("Informações inválidas. Tente novamente!");
      setFormError(true);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <div className={styles.wrap_login}>
          <form className={styles.login_form} onSubmit={onSubmitInfo}>
            <h1 className={styles.login_form_title}>Iniciar Sessão</h1>

            <div
              className={
                formError
                  ? `${styles.wrap_input} ${styles.error}`
                  : `${styles.wrap_input}`
              }
            >
              <label className={styles.label_input} htmlFor="">
                Email:
              </label>

              <input
                className={styles.login}
                name="email"
                type="email"
                placeholder="Digite seu email..."
                value={email}
                onChange={onChangeUserEmail}
              />
            </div>

            <div
              className={
                formError
                  ? `${styles.wrap_input} ${styles.error}`
                  : `${styles.wrap_input}`
              }
            >
              <label className={styles.label_input} htmlFor="">
                Senha:
              </label>
              <div className={styles.user_input}>
                <input
                  className={styles.input_register}
                  name="password"
                  type={!showPassword ? "password" : "text"}
                  placeholder="Digite sua senha..."
                  value={password}
                  onChange={onChangePassword}
                />

                <img
                  onClick={handleClickShowPassword}
                  className={styles.eye_password_bt}
                  id="imgPassword"
                  src={!showPassword ? eye : eyeslash}
                  alt="icone olho"
                />
              </div>
            </div>

            <div className={styles.container_login_form_btn}>
              <button data-testId="button" className={styles.login_form_btn} type="submit">
                Entrar
              </button>
            </div>

            <div className={styles.log}>
              <p className={styles.question}>
                Ainda não tem conta?{" "}
                <a className={styles.register} href="/register">
                  Registre-se
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
