import styles from "./SearchTemplate.module.css";

const SearchTemplate = () => {

    return (
        <>
        <div className={styles.header}>
            <h1 className={styles.title}>Alugue um carro</h1>
        <div className={styles.search}>
        
          <div className={styles.wrapper}>
            <label htmlFor="localRetirada">Local de Retirada</label>
            <input type="text" id="localRetirada" placeholder="Digite o nome da cidade" className={styles.input} />
          </div>

          <div className={styles.wrapper}>
            <label htmlFor="dataRetirada">Data e Hota de Retirada</label>
            <input type="datetime-local" id="dataRetirada" className={styles.date} />
          </div>

          <div className={styles.wrapper}>
           <label htmlFor="dataDevolucao">Data e Hora de Devolução</label>
           <input type="datetime-local" id="dataDevolucao" className={styles.date} />
           </div>

         <button className={styles.button}>Buscar 🔎</button>
      </div>
      </div>
        
        </>



    );
}

export default SearchTemplate;