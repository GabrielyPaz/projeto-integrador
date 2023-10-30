import styles from './Form.module.css';
import { useState } from 'react';
import { isEmailValid } from './ValidationEmail'
import ValidationError from './ValidationError';

const Login = () => {

    const [form, setForm] = useState({
        email: {
            hasChanged: false,
            value: ""
        },

        password: {
            hasChanged: false,
            value: ""
          }
    })

    /*const navigate = useNavigate();
    const goToRegisterPage = () => {
      navigate('/register');
    }*/

    return (
    <login className={styles.loginform}>
        <h1 className= {styles.h1} >Iniciar Sessão</h1>

       <form>
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email">E-mail</label>
            <input className={styles.input} type="text" name="email" id="email" placeholder="email@email.com" value={form.email.value}
            onChange={event => setForm({...form, email: {
                hasChanged: true, value: event.target.value
            }})}
            data-testid='email'/>
            <ValidationError
                hasChanged={form.email.hasChanged}
                errorMessage='O e-mail é obrigatório.'
                testId='email-required'
                type='required'
                value={form.email.value}/>

            <ValidationError
                hasChanged={form.email.hasChanged}
                errorMessage='E-mail inválido.'
                testId='email-invalid'
                type='email'
                value={form.email.value}/>                  
        </div>
        
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="password">Senha</label>
            <input className={styles.input} type="password" name="password" id="password" placeholder="*******" value={form.password.value}
            onChange={event => setForm({...form, password: {
                hasChanged: true, value: event.target.value
            }})}
            data-test-id="password"/>
             <ValidationError
                hasChanged={form.password.hasChanged}
                errorMessage='A senha é obrigatória.'
                testId='password-required'
                type='required'
                value={form.password.value}/>           
        </div>

        <button className={styles.clear}
        data-testid="recover-password-button"
        disabled={!isEmailValid(form.email.value)}>
            Recuperar senha
        </button>

        <button className={styles.button}
        data-testid="login-button"
        disabled={!isEmailValid(form.email.value) || !form.password.value}>
            Entrar
        </button>
        
        <div className={styles.log} >
        <p className={styles.question} >Ainda não tem conta?</p>
        <a className={styles.register} 
        data-testid="register-button" 
       /* onClick={goToRegisterPage}*/
        href="/register">Registre-se</a>
        </div>

       </form>
    </login>
    )
};

export default Login;