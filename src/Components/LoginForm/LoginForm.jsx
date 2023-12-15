import { useState } from "react";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
//import { LoginContext } from "../../contexts/LoginContext/LoginContext";
import Swal from "sweetalert2";

import { api } from "../../services/api";

import eye from "../../assets/eye.svg";
import eyeslash from "../../assets/eye-slash.svg";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);
  const navigate = useNavigate();

  const onChangeUserEmail = (e) => setUserEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const [showPassword, setShowPassword] = useState(false);

  const onSubmitInfo = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await api.post(
        "/authentication/login",
        { email: data.email, senha: data.senha },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          title: "Login Efetuado com Sucesso!",
          confirmButtonColor: "#f0572d",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.setItem("token", response.data.jwt);
            navigate("/");
          } else {
            localStorage.setItem("token", response.data.jwt);
            navigate("/");
          }
        });
      }
    } catch (error) {
      Swal.fire({
        text: "Tente novamente, suas credenciais estão inválidas!",
        confirmButtonColor: "#f0572d",
        icon: "error",
      }).then((result) => {
        if (result.isConfirmed) {
          setFormError(true);
        } else {
          setFormError(true);
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
                  name="senha"
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
              <button
                data-testId="button"
                className={styles.login_form_btn}
                type="submit"
              >
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
