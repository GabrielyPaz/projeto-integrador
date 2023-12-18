import styles from "./Reserva.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLocationPin, MdStarBorder } from "react-icons/md";
import DatePickerComponent from "../../Components/ReservaCalendar/DatePickerComponent";
import ReservaFormulario from "../../Components/ReservaFormulario/ReservaFormulario";
import ReservaHorario from "../../Components/ReservaHorario/ReservaHorario";
import Swal from "sweetalert2";
import { api } from '../../services/api';

const Reserva = ({ veiculo, historicoReservas, setHistoricoReservas }) => {
  const navigate = useNavigate();

  const [selectedHour, setSelectedHour] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const selectHour = (event) => {
    setSelectedHour(event.target.value);
  };

  const handleDateChange = (dates) => {
    setCheckIn(dates[0]);
    setCheckOut(dates[1]);
  };

  const handleReservaForm = async (e) => {
    e.preventDefault();
    
    if (!checkIn && !checkOut) {
        alert('Selecione um intervalo de datas válido.');
        return;
    } 

    const formInfoPost = {
        horaInicio: selectedHour+":00",
        horaFinal: selectedHour+":00",
        dataInicio: checkIn.getFullYear() + "-" +  (checkIn.getMonth()+1).toString().padStart(2, "0") + "-" + checkIn.getDate().toString().padStart(2, "0"),
        dataFinal: checkOut.getFullYear() + "-" +  (checkOut.getMonth()+1).toString().padStart(2, "0") + "-" + checkOut.getDate().toString().padStart(2, "0"),
        status: "VAIVIAJAR",
        produtosId: id,
        usuariosId: usuarioData.id
    };
    
    try {        
        const response = await api.post('/reservas' , formInfoPost, 
        {
          headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });


        if (response.status === 201) {
            Swal.fire({
                icon: 'success',
                title: 'Muito Obrigado!',
                color: "#f0572d",
                html: `<span>Sua reserva foi feita com sucesso!</span>`,
                confirmButtonColor: "#f0572d",
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/');
                } else {
                    navigate('/');
                }
            })  
        }    
      
    } catch (error) {
        console.log(error);
    }

}


  // const handleReservaForm = (e) => {
  //   e.preventDefault();

  //   // Informações de ReservaHorario
  //   const horaInicioReserva = selectedHour;

  //   // Informações de DatePickerComponent
  //   const dataInicialReserva = checkIn;
  //   const dataFinalReserva = checkOut;

  //   // Informações do usuário
  //   const produtoId = veiculo.id;
  //   // const usuarioId = usuarioData.email;

  //   const formInfoPost = {
  //     horaInicioReserva,
  //     dataInicialReserva,
  //     dataFinalReserva,
  //     produtoId,
  //     // usuarioId
  //   };

  //   // setHistoricoReservas((prevReservas) => [...prevReservas, formInfoPost]);

  //   if (!checkIn || !checkOut || !selectedHour) {
  //     alert("Preencha todos os campos obrigatórios.");
  //     return;
  //   } else {
  //     console.log(formInfoPost);
  //     Swal.fire({
  //       icon: "success",
  //       title: "Muito Obrigado!",
  //       color: `'#f0572d`,
  //       html: `<span'>Sua reserva foi feita com sucesso!</span>`,
  //       confirmButtonColor: "#f0572d",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         navigate("/");
  //       } else {
  //         navigate("/");
  //       }
  //     });
  //   }
  // };

    

  return (
    <form className={styles.reservaForm} onSubmit={handleReservaForm}>
      <div className={styles.leftPanel}>
        <ReservaFormulario />
        <div className={styles.containerReserva}>
          <h1 className={styles.titleCalendar}>
            Selecione sua data de reserva
          </h1>
          <div className={styles.dateArea}>
            <div className={styles.date}>
              <DatePickerComponent onChange={handleDateChange} />
            </div>
          </div>
        </div>
        <ReservaHorario onSelectHour={selectHour} />
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.detailReserva}>
          <div className={styles.reservaTitle}>
            <h2>Detalhe da reserva</h2>
          </div>

          <div className={styles.imageContainer}>
            <img
              className={styles.imgCar}
              src={veiculo.categoria?.urlImagem}
              alt="Descrição da Imagem"
            />
          </div>
          <div className={styles.produtoTitle}>
            <h3>{veiculo.categoria?.nome}</h3>
            <h2>{veiculo.modelo}</h2>
          </div>

          <div className={styles.starContainer}>
            <MdStarBorder size={14} />
            <MdStarBorder size={14} />
            <MdStarBorder size={14} />
            <MdStarBorder size={14} />
          </div>

          <div className={styles.localizacao}>
            <MdLocationPin size={14} />
            <p>{veiculo.cidade?.nome}, {veiculo.cidade?.estado}</p>
          </div>

          <div className={styles.checkArea}>
            <div className={styles.check}>
              <h4 className={styles.checkIn}>Check In</h4>
              <span>
                {checkIn ? checkIn.getDate() : "__"} /{" "}
                {checkIn ? checkIn.getMonth() + 1 : "__"} /{" "}
                {checkIn ? checkIn.getFullYear() : "__"}
              </span>
            </div>

            <div className={styles.check}>
              <h4 className={styles.checkOut}>Check Out</h4>
              <span>
                {checkOut ? checkOut.getDate() : "__"} /{" "}
                {checkOut ? checkOut.getMonth() + 1 : "__"} /{" "}
                {checkOut ? checkOut.getFullYear() : "__"}
              </span>
            </div>
          </div>

          <div className={styles.containerButton}>
            <button className={styles.button}>Confirmar reserva</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Reserva;
