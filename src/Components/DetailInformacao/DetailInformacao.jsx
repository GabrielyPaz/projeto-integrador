import styles from './DetailInformacao.module.css'

export default function DetailInformacao() {

    return(
        <div className={styles.containerInformacao}>

            <h1 className={styles.tituloInformacao}>O que você precisa saber</h1>

            <div className={styles.regrasGrid}>

                <div  className={styles.regrasInformacao}>
                    <h3 className={styles.regrasTitle}>Regras de locação</h3>

                    <p className={styles.regrasInfo}>Ter idade mínima de 21 anos</p>

                    <p className={styles.regrasInfo}>Carteira de Habilitação, original e na validade</p>

                    <p className={styles.regrasInfo}>Não ter restrições no CPF</p>

                </div>

                <div className={styles.regrasInformacao}>
                    <h3 className={styles.regrasTitle}>Alteração de Reserva</h3>

                    <p className={styles.regrasInfo}>Terá uma pré-analise de disponibilidade do veículo</p>

                    <p className={styles.regrasInfo}>Se aumentar o custo da reserva terá que pagar a diferença</p>

                    <p className={styles.regrasInfo}>A solicitação de alteração deverá ser feita por e-mail.</p>
                </div>

                <div className={styles.regrasInformacao}>           
                    <h3 className={styles.regrasTitle}>Política de cancelamento</h3>

                    <p className={styles.regrasInfo}>Antecedencia de no mínimo 48h</p>

                    <p className={styles.regrasInfo}>O cancelamento não é imidiato, pode levar até 24h</p>

                    <p className={styles.regrasInfo}>Estorno do Pagamento tem o prazo de <strong>5 dias corridos</strong>.</p>
                </div>

            </div>

        </div>
    )
}    