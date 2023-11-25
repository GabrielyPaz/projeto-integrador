import styles from './Reserva.module.css';
import { MdLocationPin, MdStarBorder } from "react-icons/md";
// import { MdKeyboardArrowLeft  } from "react-icons/md";


const Reserva = () =>  { 

    return (
    <div className={styles.container}>

        <div className={styles.detailReserva}>

            <div className={styles.reservaTitle}>
                <h2>Detalhe da reserva</h2>
            </div>

                <div className={styles.imageContainer}>
                     <img className={styles.imgCar}
                src="https://images.pexels.com/photos/11790230/pexels-photo-11790230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Descrição da Imagem"
                     />
                </div>
                <div className={styles.produtoTitle}>
                    <h3>Categoria</h3>
                        <h2>Carro</h2>
                </div>

                <div className={styles.starContainer}>
                    <MdStarBorder size={14} />
                    <MdStarBorder size={14} />
                    <MdStarBorder size={14} />
                    <MdStarBorder size={14} />
                </div>

                <div className={styles.localizacao}>
                    <MdLocationPin size={14}/>
                    <p>Recife, Pernambuco </p>
                </div>

                <div className={styles.checkArea}>
                    <div className={styles.check}>
                        <h4 className={styles.checkIn}>Check In</h4>
                        <h4>data</h4>
                    </div>
                    <div className={styles.check}>
                        <h4 className={styles.checkOut}>Check Out</h4>
                        <h4>data</h4>
                    </div>
                    
                </div>

                <div className={styles.containerButton}>    
                    <button className={styles.button}>Confirmar reserva</button>
                </div>
            
       


        </div>
        
    </div> 
    )
}

export default Reserva;
 