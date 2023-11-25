import DetailInformacao from "../../Components/DetailInformacao/DetailInformacao";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/Navbar";
import DatePickerComponent from "../../Components/ReservaCalendar/DatePickerComponent";
import ReservaHeader from "../../Components/ReservaHeader/ReservaHeader";
import ReservaFormulario from "../../Components/ReservaFormulario/ReservaFormulario";
import ReservaHorario from "../../Components/ReservaHorario/ReservaHorario";
import Reserva from "../../Components/Reserva/Reserva";
import styles from './ReservaPage.module.css';

// import dadosVeiculo from '../../data/contents.json'
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";


export function ReservaPage() {

    // const [veiculo, setVeiculo] = useState([]);
    // const veiculoId = useParams();

    // const getVeiculo = () => {

    //     const veiculoEncontrado = dadosVeiculo.find(item => item.id === parseInt (veiculoId.id) );
    //     setVeiculo(veiculoEncontrado);

    //     console.log(veiculoEncontrado);
    // }

    // useEffect(() => {
    //     getVeiculo();
    // }, []);


return (
    <>
        <Navbar />
        <main>
            <ReservaHeader />
            <div className={styles.container}>
                <div className={styles.leftPanel}>
                    <ReservaFormulario />
                        <div className={styles.containerReserva}>
                            <h1 className={styles.title}>Selecione sua data de reserva</h1>
                            <div className={styles.dateArea}>
                                <div className={styles.date}>
                                    <DatePickerComponent/>
                                </div>
                            </div>
                        </div>    
                    <ReservaHorario />
                 </div>
                <div className={styles.rightPanel}>
                    <Reserva />
                </div>
            </div>
            <DetailInformacao />
        </main>
        <Footer />
    </>
    )
}


