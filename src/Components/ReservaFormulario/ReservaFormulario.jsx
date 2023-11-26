import styles from './ReservaFormulario.module.css';



export default function ReservaFormulario() {

    return (
        <form className={styles.reservaFormulario}>

            <div className={styles.reservaForm}>
                <h1 className={styles.DadosReserva}>Complete seus dados</h1>
                
                <div className={styles.input}>
                    
                    <div className={styles.inputItem}>
                        <label className={styles.label} htmlFor="">Nome</label>
                        <input className={styles.inputText} type="text" placeholder='Digite seu nome.' disabled/>
                    </div>

                    <div className={styles.inputItem}>
                        <label className={styles.label} htmlFor="">Sobrenome</label>
                        <input className={styles.inputText} type="text" placeholder='Digite seu sobrenome.' disabled />
                    </div>

                    <div className={styles.inputItem}>
                        <label className={styles.label} htmlFor="">E-mail</label>
                        <input className={styles.inputText} type="text" placeholder='Digite seu e-mail.' disabled/>
                    </div>

                    <div className={styles.inputItem}>
                        <label className={styles.label} htmlFor="">Cidade</label>
                        <input className={styles.inputText} type="text" placeholder=' ' required/>
                    </div>

                </div>
            </div>   

        </form>
    )
}