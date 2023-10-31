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
            <h1 className={styles.login_form_title}>Iniciar Sessão</h1>

            <div className={styles.wrap_input}>
            <label className={styles.focus_input} data-placeholder="Email"></label>
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
             
            </div>

            <div className={styles.wrap_input}>
            <label className={styles.focus_input} data-placeholder="Password"></label>
              <input
                className={password !== "" ? "has_val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={styles.container_login_form_btn}>
              <button className={styles.login_form_btn}>Login</button>
            </div>

            <div className={styles.log} >
                 <p className={styles.question}>Ainda não tem conta?</p>
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