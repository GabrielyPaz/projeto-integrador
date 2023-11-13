import styles from './DetailReserva.module.css';
import DatePickerComponent from '../DatePickerComponent/DatePickerComponent';



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
                <button className={styles.button}>Iniciar reserva</button>
            </div>

        </div>
        

    </div> 
      
    )
 }
 
 
 export default DetailReserva;