import styles from "./SearchTemplate.module.css";


const SearchTemplate = () => {

  const cidades = ["Recife - PE", "São Paulo - SP", "Fortaleza - CE", "Salvador - BA"];

    return (
        <>
        <div className={styles.headerSearch}>
            <h1 className={styles.title}>Buscar ofertas em aluguéis de carros</h1>
        <div className={styles.search}>
        
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="localRetirada">Local de Retirada</label>
            <input type="text" id="localRetirada" placeholder="Cidade" className={styles.input} 
            list="cidades"/>
            <datalist id="cidades">
              {cidades.map((cidade, index) => (
                <option key={index} value={cidade} />
              ))}
            </datalist>
          </div>

          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="dataRetirada">Data e Hora de Retirada</label>
            <input type="datetime-local" id="dataRetirada" className={styles.date} />
          </div>

          <div className={styles.wrapper}>
           <label className={styles.label} htmlFor="dataDevolucao">Data e Hora de Devolução</label>
           <input type="datetime-local" id="dataDevolucao" className={styles.date} />
           </div>

         <button className={styles.button}>Buscar</button>
      </div>
      </div>
        
        </>



    );
}

export default SearchTemplate;