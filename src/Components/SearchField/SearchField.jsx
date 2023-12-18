/* eslint-disable no-unused-vars */
import styles from './SearchField.module.css'

const SearchField = ({ filter, setFilter }) => {

  return (
    <div className={styles.filter}>

        <h3>Buscar carro por categoria</h3>
        <div className={styles.filterOptions}>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className={styles.selectContainer}>
            <option value="All">Todas</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Coupé">Coupé</option>
          </select>
        </div>
    </div>
  )
}

export default SearchField