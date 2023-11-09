import styles from './DetailGaleria.module.css';
import { HiOutlineHeart, HiOutlineShare  } from "react-icons/hi";


const DetailGaleria = () => {


   return (
    <div>
        <div className={styles.actions}>
            <HiOutlineShare size={25} />
            <HiOutlineHeart size={25}/>

        </div>
        <div className={styles.containerBox}>
        
            <div className={styles.box1}>
                <img className={styles.imgPrincipal} src="" alt="Descrição da Imagem" />
            </div>
        
            <div className={styles.box2}>
                <img className={styles.imgSub} src="" alt="Descrição da Imagem" />
            </div>
            <div className={styles.box3}>
                <img className={styles.imgSub} src="" alt="Descrição da Imagem" />
            </div>
            <div className={styles.box4}>
                <img className={styles.imgSub} src="" alt="Descrição da Imagem" />
            </div>
            <div className={styles.box5}>
                <img className={styles.imgSub} src="" alt="Descrição da Imagem" />
            </div>
        </div>
   </div> 
     
   )
}


export default DetailGaleria;