import styles from './DetailHeader.module.css';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft  } from "react-icons/md";


const DetailHeader = ( {veiculo} ) => { 

    return (
    <div className={styles.detailHeader}>

        <div className={styles.detailTitle}>
            <h2>{veiculo.category}</h2>
                <h1>{veiculo.title}</h1>
        </div>
        
        <div className={styles.detailHeaderIcon}>
            <Link to="/" className={styles.link}>
                <MdKeyboardArrowLeft size={50}/>  
            </Link>   
        </div>
    </div> 
    )
}

export default DetailHeader;
 