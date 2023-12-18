import styles from './ReservaFormulario.module.css'
import { jwtDecode } from "jwt-decode";


export default function ReservaFormulario() {
 
   const estaLogado = !!localStorage.getItem("token");
    const token = estaLogado ? localStorage.getItem("token") : null;
    const usuarioData = token ? jwtDecode(token) : null;

  return (
    <form className={styles.reservaFormulario}>
      <div className={styles.reservaForm}>
        <h1 className={styles.DadosReserva}>Complete seus dados</h1>

        <div className={styles.input}>
          <div className={styles.inputItem}>
            <label className={styles.label} htmlFor="">
              Nome
            </label>
            <input
              className={styles.inputText}
              type="text"
              placeholder={usuarioData.nome}
              disabled
            />
          </div>

          <div className={styles.inputItem}>
            <label className={styles.label} htmlFor="">
              Sobrenome
            </label>
            <input
              className={styles.inputText}
              type="text"
              placeholder={usuarioData.sobrenome}
              disabled
            />
          </div>

          <div className={styles.inputItem}>
            <label className={styles.label} htmlFor="">
              E-mail
            </label>
            <input
              className={styles.inputText}
              type="text"
              placeholder={usuarioData.sub}
              disabled
            />
          </div>

          <div className={styles.inputItem}>
            <label className={styles.label} htmlFor="">
              Cidade
            </label>
            <input
              className={styles.inputText}
              type="text"
              placeholder="Digite sua cidade."
              required
            />
          </div>
        </div>
      </div>
    </form>
  )
}
