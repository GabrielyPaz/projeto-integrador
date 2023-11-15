/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import DetailHeader from "../../Components/DetailHeader/DetailHeader";
import DetailLocalizacao from "../../Components/DetailLocalizacao/DetailLocalizacao";
import DetailGaleria from "../../Components/DetailGaleria/DetailGaleria";
import DetailCaracteristica from "../../Components/DetailCaracteristica/DetailCaracteristica";
import DetailMapa from "../../Components/DetailMapa/DetailMapa";
import DetailInformacao from "../../Components/DetailInformacao/DetailInformacao";
import DetailReserva from "../../Components/DetailReserva/DetailReserva";
import dadosVeiculo from '../../data/contents.json'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function DetailPage() {

    const [veiculo, setVeiculo] = useState([]);
    const veiculoId = useParams();

    const getVeiculo = () => {

        const veiculoEncontrado = dadosVeiculo.find(item => item.id === parseInt (veiculoId.id) );
        setVeiculo(veiculoEncontrado);

        console.log(veiculoEncontrado);
    }

    useEffect(() => {
        getVeiculo();
    }, []);

return (
    <>
        <Navbar />
        <main>
            <DetailHeader veiculo={veiculo}/>
            <DetailLocalizacao veiculo={veiculo}/>
            <DetailGaleria veiculo={veiculo}/>
            <DetailCaracteristica veiculo={veiculo}/>
            <DetailReserva veiculo={veiculo}/>
            <DetailMapa veiculo={veiculo}/>
            <DetailInformacao veiculo={veiculo}/>
        </main> 
    <Footer /> 
</>

)
}