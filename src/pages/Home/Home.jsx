import Body from "../../Components/Body/Body";
import SearchTemplate from "../../Components/SearchTemplate/SearchTemplate";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";

export function Home() {

return (
    <>
        <Navbar />
        <main>
            <SearchTemplate />
            <Body />
        </main> 
        <Footer /> 
    </>
);
}
