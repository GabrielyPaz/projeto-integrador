import DetailInformacao from "../../Components/DetailInformacao/DetailInformacao";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/Navbar";
import DatePickerComponent from "../../Components/ReservaCalendar/DatePickerComponent";
import ReservaHeader from "../../Components/ReservaHeader/ReservaHeader";
import ReservaFormulario from "../../Components/ReservaFormulario/ReservaFormulario";
import ReservaHorario from "../../Components/ReservaHorario/ReservaHorario";
import Reserva from "../../Components/Reserva/Reserva";
import styles from "./ReservaPage.module.css";

/*import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";*/

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

 /* const navigate = useNavigate();
  const produtoId = useParams();
  const [setProduto] = useState([]);

  const estaLogado = !!localStorage.getItem("usuarioLogado");

  const verificarLogin = () => {
    console.log(estaLogado);

    if (!estaLogado) {
      console.log("Redirecionando para /login");
      navigate("/login");
      Swal.fire({
        icon: "error",
        title: "Atenção:",
        text: "Para realizar a reserva você deverá estar logado.",
        confirmButtonColor: "#1DBEB4",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("Confirmado");
          navigate("/login");
        } else {
          console.log("Não Confirmado");
          navigate("/login");
        }
      });
    }
  };

  const getProduto = () => {
    const produtoEncontrado = produtoId.find(
      (item) => item.id === parseInt(produtoId.id)
    );
    setProduto(produtoEncontrado);
  };

  useEffect(() => {
    verificarLogin();
    getProduto();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      transitionDelay: 300,
      behavior: "smooth",
    });
  }, []);*/

  return (
    <>
      <Navbar />
      <main>
        <ReservaHeader />
        <div className={styles.container}>
          <div className={styles.leftPanel}>
            <ReservaFormulario />
            <div className={styles.containerReserva}>
              <h1 className={styles.titleCalendar}>
                Selecione sua data de reserva
              </h1>
              <div className={styles.dateArea}>
                <div className={styles.date}>
                  <DatePickerComponent />
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
  );
}
