import DetailInformacao from "../../Components/DetailInformacao/DetailInformacao";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/Navbar";
import DatePickerComponent from "../../Components/ReservaCalendar/DatePickerComponent";
import ReservaHeader from "../../Components/ReservaHeader/ReservaHeader";
import ReservaFormulario from "../../Components/ReservaFormulario/ReservaFormulario";
import ReservaHorario from "../../Components/ReservaHorario/ReservaHorario";
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
            <ReservaFormulario />
            <DatePickerComponent />
            <ReservaHorario />
            <DetailInformacao />
            
        </main>
        <Footer />
    </>
    )
}

