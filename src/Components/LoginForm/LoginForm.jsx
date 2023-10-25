const Login = () => {

    return (
    <>
       <p>Tela Login</p>
        <h1>Iniciar Sessão</h1>

       <form>
        <div className="inputContainer">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" placeholder="email@email.com"/>
        </div>
        
        <div className="inputContainer">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="*******"/>

        </div>

        <button className="button">
            Entrar
        </button>

        <a href="">Ainda não tem conta? Registre-se</a>

       </form>
    </>
    )

};

export default Login;