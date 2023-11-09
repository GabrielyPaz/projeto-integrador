import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import DetailHeader from "../../Components/DetailHeader/DetailHeader";
import DetailLocalizacao from "../../Components/DetailLocalizacao/DetaielLocalizacao";
import DetailGaleria from "../../Components/DetailGaleria/DetailGaleria";
import DetailCaracteristica from "../../Components/DetailCaracteristica/DetailCaracteristica";

export function DetailPage() {

return (
    <>
        <Navbar />
        <main>
            <DetailHeader/>
            <DetailLocalizacao/>
            <DetailGaleria/>
            <DetailCaracteristica/>
        </main> 
    <Footer /> 
</>

);

}
