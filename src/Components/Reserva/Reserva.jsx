import styles from "./Reserva.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLocationPin, MdStarBorder } from "react-icons/md";
import DatePickerComponent from "../../Components/ReservaCalendar/DatePickerComponent";
import ReservaFormulario from "../../Components/ReservaFormulario/ReservaFormulario";
import ReservaHorario from "../../Components/ReservaHorario/ReservaHorario";
import Swal from "sweetalert2";
import { api } from '../../services/api';
import { jwtDecode } from "jwt-decode";
import { format, addHours } from 'date-fns';

const Reserva = ({ veiculo }) => {
  const navigate = useNavigate();

  const [selectedHoraChegada, setSelectedHoraChegada] = useState("");
  const [selectedHoraDevolucao, setSelectedHoraDevolucao] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const selectHour = (event, type) => {
    const selectedHourValue = event.target.value;

    if (type === "chegada") {
      setSelectedHoraChegada(selectedHourValue);
    } else if (type === "devolucao") {
      setSelectedHoraDevolucao(selectedHourValue);
    }
  };

  const handleDateChange = (dates) => {
    setCheckIn(dates[0]);
    setCheckOut(dates[1]);
  };

  // const formatarDataHoraParaAPI = (data, hora) => {
  //   console.log(data,hora,hora.getHours())
  //   return format(addHours(data, hora.getHours()), 'dd/MM/yyyy HH:mm');
  // };


  const token = localStorage.getItem("token");
  const usuarioData = token ? jwtDecode(token) : null;


  const handleReservaForm = async (e) => {
    e.preventDefault();
    console.log('Formulário enviado!');
    
    if (!checkIn || !checkOut) {
        alert('Selecione um intervalo de datas válido.');
        return;
    } 

    // Verifica se veiculo está definido
    if (!veiculo) {
      console.error('Erro: Veículo não está definido.');
      return;
    }

    // Verifica se veiculo.id está definido
    if (!veiculo.id) {
      console.error('Erro: ID do veículo não está definido.');
      return;
    }

    // Verifica se usuarioData está definido
    if (!usuarioData) {
      console.error('Erro: Informações do usuário não estão definidas.');
      return;
    }

    // Verifica se usuarioData.id está definido
    if (!usuarioData.id) {
      console.error('Erro: ID do usuário não está definido.');
      return;
    }


    const formInfoPost = {
      carroId: veiculo.id,
      dataInicial: format(addHours(checkIn, selectedHoraChegada), 'dd/MM/yyyy HH:mm'),
      dataFinal: format(addHours(checkOut, selectedHoraDevolucao), 'dd/MM/yyyy HH:mm'),
      usuarioId: usuarioData.id,
    };

    console.log(selectedHoraDevolucao);
    console.log(selectedHoraChegada);
    console.log(formInfoPost)
    console.log("SOCORROO MEU DEUS")

    try {        
        const response = await api.post('/reservas', formInfoPost, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
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
        console.log('Erro ao enviar reserva:', error);
    }
  }

  return (
    <form className={styles.reservaForm} onSubmit={handleReservaForm}>
      <div className={styles.leftPanel}>
        <ReservaFormulario veiculo={veiculo}/>
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
        <ReservaHorario />
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

