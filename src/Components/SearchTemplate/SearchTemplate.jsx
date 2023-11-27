import styles from './SearchTemplate.module.css'

const SearchTemplate = ({ search, setSearch, handleSearch }) => {
  // const cidades = ["Recife - PE", "São Paulo - SP", "Fortaleza - CE", "Salvador - BA"];

  return (
    <>
      <div className={styles.headerSearch}>
        <h1 className={styles.title}>Alugue um carro</h1>
        <div className={styles.search}>
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="localRetirada">
              Local de Retirada
            </label>
            <input
              type="text"
              id="localRetirada"
              placeholder="Cidade"
              className={styles.input}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="dataRetirada">
              Data e Hora de Retirada
            </label>
            <input
              type="datetime-local"
              id="dataRetirada"
              className={styles.date}
            />
          </div>

          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="dataDevolucao">
              Data e Hora de Devolução
            </label>
            <input
              type="datetime-local"
              id="dataDevolucao"
              className={styles.date}
            />
          </div>

          <button className={styles.button} onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchTemplate
