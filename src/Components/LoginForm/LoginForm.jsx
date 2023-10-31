import styles from './Form.module.css';
import { useState } from 'react';



const Login = () => {

const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <div className={styles.wrap_login}>
          <form className={styles.login_form}>
            <span className={styles.login_form_title}> Iniciar Sessão </span>

            <div className={styles.wrap_input}>
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className={styles.log} >
                 <p className={styles.question} >Ainda não tem conta?</p>
                 <a className={styles.register} 
                 href="/register">Registre-se</a>
        </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;