import styles from './DetailReserva.module.css';
import DatePickerComponent from '../DatePickerComponent/DatePickerComponent';
import { Link } from 'react-router-dom'; 



const DetailReserva = () => {


    return (
     
    <div className={styles.containerReserva}>
        <h1 className={styles.title}>Datas disponíveis</h1>
        <div className={styles.dateArea}>
            <div className={styles.date}>
                <DatePickerComponent/>
            </div>
            <div className={styles.containerButton}>
                <p>Adicione datas a sua viagem para obter o valor exato</p>    
                <Link  to="/reservation" className={styles.link}>Iniciar reserva</Link>
            </div>

        </div>
        

    </div> 
      
    )
 }
 // /reserve
 
 export default DetailReserva;