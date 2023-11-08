import styles from './DetailCarHeader.module.css';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft  } from "react-icons/md";


const DetailCarHeader = () => { 

    return (
    <div className={styles.detailHeader}>

        <div className={styles.detailTitle}>
            <h1>Nome da Categoria</h1>
                <h2>Produto</h2>
        </div>
        
        <div className={styles.detailHeaderIcon}>
            <Link to="/" className={styles.link}>
                <MdKeyboardArrowLeft size={50}/>  
            </Link>   
        </div>
       
    </div> 
       
    )
}

export default DetailCarHeader;