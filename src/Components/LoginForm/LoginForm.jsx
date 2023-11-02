import { useState } from 'react';
import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

const [email, setUserEmail] = useState("");
const [password, setPassword] = useState("");
const [formError, setFormError] = useState(false);
const navigate = useNavigate();

const onChangeUserEmail = (e) => setUserEmail(e.target.value);
const onChangePassword = (e) => setPassword(e.target.value);

const onSubmitInfo = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const registros = JSON.parse(localStorage.getItem("registros"));
  const existRegister = !!localStorage.getItem("registros");
    
  if(existRegister){

    const searchUser = registros.find(record =>
      record.email === data.email && record.password === data.password);

      if(searchUser){

        alert('Login efetuado com sucesso!')
        localStorage.setItem('Está logado!', false);
        localStorage.setItem('Usuário logado!', JSON.stringify(searchUser));

        navigate("/")
      } else {
        alert('Informações inválidas. Tente novamente!')
        setFormError(true) 
      }
  } else {
    alert('Informações inválidas. Tente novamente!')
    setFormError(true) 
  } 
}

return (

  <div className={styles.container}>
    <div className={styles.container_login}>
      <div className={styles.wrap_login}>

        <form className={styles.login_form} onSubmit={onSubmitInfo}>

          <h1 className={styles.login_form_title}>Iniciar Sessão</h1>

              <div className={formError ? `${styles.wrap_input} ${styles.error}` : `${styles.wrap_input}`} >
                <label className={styles.focus_input} htmlFor=""></label>

                  <input className={styles.login}
                    name="email"
                    type="email"
                    placeholder="Digite seu email..."
                    value={email}
                    onChange={onChangeUserEmail}
                  />             
              </div>

              <div className={formError ? `${styles.wrap_input} ${styles.error}` : `${styles.wrap_input}`}>
                <label className={styles.focus_input} htmlFor=""></label>

                <input className={styles.login}
                  name="password"
                  type="password"
                  placeholder="Digite sua senha..."
                  value={password}
                  onChange={onChangePassword}
                />
              </div>

              <div className={styles.container_login_form_btn}>
                <button className={styles.login_form_btn} type="submit">Entrar</button>
              </div>

              <div className={styles.log} >
                  <p className={styles.question}>Ainda não tem conta? <a className={styles.register} href="/register">Registre-se</a></p> 
              </div>
            </form>
          
        </div>
      </div>
    </div>
  );
}

export default Login;