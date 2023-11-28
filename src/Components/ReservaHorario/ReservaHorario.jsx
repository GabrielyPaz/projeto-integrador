import styles from "./ReservaHorario.module.css"
import { useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

export default function Horario() {

  const [ horariosArray ] = useState(Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`));

  return (

    <form className={styles.reservaHorario}>
      <div className={styles.horaChegadaFormulario}>
        <h1 className={styles.horaTitulo}> Seu horário de chegada </h1>

        <div className={styles.horarioFormPrinc}>
          <div className={styles.horaCheck}>
            <FaRegCheckCircle />
            <p> Seu carro estará pronto para check-in entre 08h00 e 20h00</p>
          </div>

          <label className={styles.horaLabel}>
            Indique a sua hora prevista de chegada
          </label>

          <select className={styles.horaSelect}>
            <option value="" disabled hidden selected>
              Selecione a sua hora de chegada</option>
              {horariosArray.map((horario, index) => (
                                <option key={index} value={horario}>
                                    {horario}
                                </option>
              ))}
          </select>

          {/* <label className={styles.horaLabel}>
            Indique a sua hora prevista para devolução
          </label>

          <select className={styles.horaSelect}>
            <option value="" disabled hidden selected>
              Selecione a sua hora de devolução</option>
              {horariosArray.map((horario, index) => (
                                <option key={index} value={horario}>
                                    {horario}
                                </option>
              ))}
          </select> */}
        </div>
      </div>
    </form>
  );
}