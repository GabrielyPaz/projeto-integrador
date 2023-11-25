import styles from './Reserva.module.css';
import { MdLocationPin, MdStarBorder } from "react-icons/md";
// import { MdKeyboardArrowLeft  } from "react-icons/md";


const Reserva = () =>  { 

    return (
    <div className={styles.container}>

        <div className={styles.detailReserva}>

            <div className={styles.title}>
                <h2>Detalhe da reserva</h2>
            </div>

                <img
            className={styles.imgCar}
            src="https://images.pexels.com/photos/11790230/pexels-photo-11790230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Descrição da Imagem"
                />

                <div className={styles.starContainer}>
                    <MdStarBorder size={14} />
                    <MdStarBorder size={14} />
                    <MdStarBorder size={14} />
                    <MdStarBorder size={14} />
                </div>

                <div className={styles.detailTitle}>
                    <MdLocationPin size={20}/>
                    <p>Recife, Pernambuco </p>
                </div>
            
       


        </div>
        
    </div> 
    )
}

export default Reserva;
 