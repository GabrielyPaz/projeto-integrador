import styles from "./ReservaHorario.module.css";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Horario({ onSelectHour }) {
  const horariosArray = Array.from({ length: 24 }, (_, i) =>
    `${i.toString().padStart(2, "0")}:00`
  );

  const [selectedHours, setSelectedHours] = useState({
    chegada: "",
    devolucao: "",
  });

  const selectHour = (event, type) => {
    const selectedHourValue = event.target.value;
    setSelectedHours((prev) => ({ ...prev, [type]: selectedHourValue }));
  };

  console.log('selectedHours:', selectedHours);

  const renderOptions = () =>
    horariosArray.map((horario, index) => (
      <option key={index} value={horario}>
        {horario}
      </option>
    ));

  return (
    <div className={styles.reservaHorario}>
      <div className={styles.horaChegadaFormulario}>
        <h1 className={styles.horaTitulo}> Seu horário de chegada </h1>

        <div className={styles.horarioFormPrinc}>
          <div className={styles.horaCheck}>
            <FaRegCheckCircle />
            <p> Seu carro estará pronto para check-in a partir da hora agendada</p>
          </div>

          <div className={styles.horasComponent}>
            <label className={styles.horaLabel}>Indique a sua hora prevista de chegada</label>
            <select
              className={styles.horaSelect}
              onChange={(event) => selectHour(event, 'chegada')}
              value={selectedHours.chegada}
            >
              <option value="" disabled hidden>
                Selecione a sua hora de chegada
              </option>
              {renderOptions()}
            </select>
          </div>

          <div className={styles.horasComponent}>
            <label className={styles.horaLabel}>Indique a sua hora prevista para devolução</label>
            <select
              className={styles.horaSelect}
              onChange={(event) => selectHour(event, 'devolucao')}
              value={selectedHours.devolucao}
            >
              <option value="" disabled hidden>
                Selecione a sua hora de devolução
              </option>
              {renderOptions()}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

