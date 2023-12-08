import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AdminFormulario from "../../Components/AdminFormulario/AdminFormulario";


export function AdminPage() {

return (
    <>
        <Navbar />
        <main>
            <AdminFormulario />
        </main>
        <Footer />
    </>
    )
}