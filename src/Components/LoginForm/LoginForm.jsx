import styles from './Form.module.css'

const Login = () => {

    return (
    <login className={styles.loginform}>
        <h1 className= {styles.h1} >Iniciar Sessão</h1>

       <form>
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email">E-mail</label>
            <input className={styles.input} type="text" name="email" id="email" placeholder="email@email.com"/>
        </div>
        
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="password">Confirmar senha</label>
            <input className={styles.input} type="password" name="password" id="password" placeholder="*******"/>

        </div>

        <button className={styles.button}>
            Entrar
        </button>

        <div className={styles.log} >
        <p className={styles.question} >Ainda não tem conta?</p>
        <a className={styles.register} href="#">Registre-se</a>
        </div>

       </form>
    </login>
    )
};

export default Login;