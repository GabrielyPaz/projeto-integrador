import styles from './DetailGaleria.module.css';
import { HiOutlineHeart, HiOutlineShare  } from "react-icons/hi";
import { Link } from 'react-router-dom';


const DetailGaleria = () => {


   return (
    <div className={styles.container}>
        <div className={styles.actions}>
            <HiOutlineShare size={25} />
            <HiOutlineHeart size={25}/>

        </div>
        <div className={styles.containerBox}>
        
            <div className={styles.box1}>
                <img className={styles.imgCar} src="https://images.pexels.com/photos/93632/pexels-photo-93632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Descrição da Imagem" />
            </div>
        
            <div className={styles.box2}>
                <img className={styles.imgCar} src="https://images.pexels.com/photos/11790230/pexels-photo-11790230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Descrição da Imagem" />
            </div>
            <div className={styles.box3}>
                <img className={styles.imgCar} src="https://images.pexels.com/photos/18369294/pexels-photo-18369294/free-photo-of-automotivo-automotor-automobilistico-carro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Descrição da Imagem" />
            </div>
            <div className={styles.box4}>
                <img className={styles.imgCar} src="https://images.pexels.com/photos/7508527/pexels-photo-7508527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Descrição da Imagem" />
            </div>
            <div className={styles.box5}>
                <img className={styles.imgCar} src="https://images.pexels.com/photos/11877391/pexels-photo-11877391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Descrição da Imagem" />
                <Link to="/" className={styles.link}>Ver mais</Link>
            </div>
        </div>




   </div> 
     
   )
}


export default DetailGaleria;