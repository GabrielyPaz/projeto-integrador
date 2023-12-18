import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminFormulario from "../../Components/AdminFormulario/AdminFormulario";
import { jwtDecode } from "jwt-decode";
import axiosINstance from "../../service/api";

export function AdminPage() {
  const navigate = useNavigate();

  const userToken = localStorage.getItem("token");
  const usuarioData = userToken ? jwtDecode(userToken) : null;
  const [isAdmin] = useState(usuarioData ? usuarioData.funcao.nome : null);

  const [categoria, setCategoria] = useState([]);
  const [carro, setCarro] = useState([]);
  const [cidade, setCidade] = useState([]);

  const getCarro = async () => {
    const resposta = await axiosINstance.get(`/carros/`);
    setCarro(resposta.data);
  };

  const getCidade = async () => {
    const resposta = await axiosINstance.get(`/cidades`);
    setCidade(resposta.data.cidade);
  };

  const getCategoria = async () => {
    const resposta = await axiosINstance.get(`/categorias`);
    setCategoria(resposta.data.categoria);
  };

  useEffect(() => {
    getCarro();
    getCidade();
    getCategoria();
    if (isAdmin != "admin") {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {isAdmin != null && (
          <AdminFormulario
            carro={carro}
            cidade={cidade}
            categoria={categoria}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
