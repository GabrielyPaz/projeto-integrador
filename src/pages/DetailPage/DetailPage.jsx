import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import DetailHeader from "../../Components/DetailHeader/DetailHeader";
import DetailLocalizacao from "../../Components/DetailLocalizacao/DetailLocalizacao";
import DetailGaleria from "../../Components/DetailGaleria/DetailGaleria";
import DetailCaracteristica from "../../Components/DetailCaracteristica/DetailCaracteristica";
import DetailMapa from "../../Components/DetailMapa/DetailMapa";
import DetailInformacao from "../../Components/DetailInformacao/DetailInformacao";
import DetailReserva from "../../Components/DetailReserva/DetailReserva";

export function DetailPage() {

return (
    <>
        <Navbar />
        <main>
            <DetailHeader/>
            <DetailLocalizacao/>
            <DetailGaleria/>
            <DetailCaracteristica/>
            <DetailReserva/>
            <DetailMapa/>
            <DetailInformacao/>
        </main> 
    <Footer /> 
</>

)
}