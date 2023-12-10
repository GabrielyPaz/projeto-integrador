import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
//import { useNavigate } from 'react-router-dom';
//import { useEffect, useState } from 'react';
import AdminFormulario from "../../Components/AdminFormulario/AdminFormulario";


export function AdminPage() {

  /*  const navigate = useNavigate();
    const [isAdmin] = useState();
   
    useEffect(() => {
        if(isAdmin != 'ADMIN') {
            navigate('/');
        }
    }, [isAdmin, navigate]);*/

return (
    <>
        <Navbar />
        <main>
          { /* { isAdmin != null && ( <AdminFormulario /> ) } */}
           <AdminFormulario />
        </main>
        <Footer />
    </>
    )
}