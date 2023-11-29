  
import styles from './ReservaFormulario.module.css'

export default function ReservaFormulario() {
  const estaLogado = !!localStorage.getItem('usuarioLogado')
  const usuarioData = estaLogado
    ? JSON.parse(localStorage.getItem('usuarioLogado'))
    : { nome: '', sobrenome: '', email: '' }

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
              placeholder={usuarioData.email}
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
