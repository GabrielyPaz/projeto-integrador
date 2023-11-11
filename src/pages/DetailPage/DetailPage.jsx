import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import DetailHeader from "../../Components/DetailHeader/DetailHeader";
import DetailLocalizacao from "../../Components/DetailLocalizacao/DetaielLocalizacao";
import DetailGaleria from "../../Components/DetailGaleria/DetailGaleria";
import DetailCaracteristica from "../../Components/DetailCaracteristica/DetailCaracteristica";
import DetailMapa from "../../Components/DetailMapa/DetailMapa";
import DetailInformacao from "../../Components/DetailInformacao/DateilInformacao";

export function DetailPage() {

return (
    <>
        <Navbar />
        <main>
            <DetailHeader/>
            <DetailLocalizacao/>
            <DetailGaleria/>
            <DetailCaracteristica/>
            <DetailMapa/>
            <DetailInformacao/>
        </main> 
    <Footer /> 
</>

)
}