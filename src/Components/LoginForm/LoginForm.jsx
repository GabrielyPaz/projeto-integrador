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

        <a className={styles.registrar} href="">Ainda não tem conta? Registre-se</a>

       </form>
    </login>
    )
};

export default Login;