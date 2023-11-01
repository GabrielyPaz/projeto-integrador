import styles from './Form.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import registros from '../../'

const Login = () => {

const [email, setUserEmail] = useState("");
const [password, setPassword] = useState("");
const [formError, setFormError] = useState(false);
const navigate = useNavigate;
const onChangeUserEmail = (e) => setUserEmail(e.target.value);
const onChangePassword = (e) => setPassword(e.target.value);

const onSubmitInfo = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const registers = JSON.parse(localStorage.getItem("registers"));
  const existRegister = !!localStorage.getItem("registers");
    //existRegister
  if(data){
                      //registers 
    const searchUser = registros.find(record =>
      record.email === data.email && record.senha === data.password)
      console.log(searchUser)
      if(searchUser){

        alert('Login efetuado com sucesso!')
        localStorage.setItem('Está logado!', false)
        localStorage.setItem('Usuário logado!', JSON.stringify(searchUser))
        navigate('/')
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

        <div className={ styles.wrap_input } >
          <label className={styles.focus_input} data-placeholder="E-mail"></label>

            <input className={styles.login}
              name="email"
              type="email"
              value={email}
              onChange={onChangeUserEmail}
            />             
       </div>

            <div className={styles.wrap_input}>
            <label className={styles.focus_input} data-placeholder="Senha"></label>
              <input className={styles.login}
                name="password"
                type="password"
                value={password}
                onChange={onChangePassword}
              />
            </div>

            <div className={styles.container_login_form_btn}>
              <button className={styles.login_form_btn}>Entrar</button>
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