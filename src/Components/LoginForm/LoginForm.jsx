import { useState, useContext } from "react";  
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext/LoginContext";
import Swal from 'sweetalert2';

// ========= ANDRE ===========
import eye from "../../assets/eye.svg";
import eyeslash from "../../assets/eye-slash.svg";

export default function Login() {

  const [userEmail, setUserEmail] = useState("");
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
        record => record.email === data.email && record.password === data.password
      );

      if(searchUser) {
        Swal.fire({
            title: "Login Efetuado com Sucesso!",
            background: `${login ? '#DFE4EA': '#31363f'}`,
            color: `${login ? '#31363f' : '#31363f'}`,
            confirmButtonColor: '#f0572d',
            icon: "success"
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('usuarioLogado', JSON.stringify(searchUser));
                navigate('/');
            } else {
                localStorage.setItem('usuarioLogado', JSON.stringify(searchUser));
                navigate('/');
            }
        });

    } else {
        Swal.fire({
            text: "Tente novamente, suas credenciais estão inválidas!",
            background: `${login ? '#31363f': '#31363f'}`,
            color: `${'#FFF'}`,
            confirmButtonColor: '#f0572d',
            icon: "error"
          }).then((result) => {
            if (result.isConfirmed) {
                setFormError(true)
            } else {
              setFormError(true)
            }
          });
        
    }

} else {
    Swal.fire({
        text: "Por favor, tente novamente, suas credenciais são inválidas!",
        background: `${'#1f242d'}`,
        color: `${'#FFF'}`,
        confirmButtonColor: '#1DBEB4',
        icon: "error"
      }).then((result) => {
        if (result.isConfirmed) {
          setFormError(true)
        } else {
          setFormError(true)
        }
      });
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
                placeholder="Digite seu email."
                value={userEmail}
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
                  placeholder="Digite sua senha."
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
}



