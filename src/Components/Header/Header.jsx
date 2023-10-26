import styles from "./Header.module.css";

const Header = () => {

    return (
        <>
        <div className={styles.header}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Local de Retirada" className={styles.searchInput} />
            <input type="datetime-local" className={styles.dateTimeInput} />
            <input type="datetime-local" className={styles.dateTimeInput} />
        <button className={styles.searchButton}>Buscar 🔎</button>
          </div>
          <div className={styles.checkboxContainer}>
           <input type="checkbox" id="devolver-outro-lugar" />
           <label htmlFor="devolver-outro-lugar">Devolver em outro lugar</label>
           </div>
        </div>
        
        </>



    );
}

export default Header;