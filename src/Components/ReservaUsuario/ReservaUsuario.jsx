import styles from "./ReservaUsuario.module.css";
import { Link } from "react-router-dom";
import {
  MdKeyboardArrowLeft,
  MdLocationPin,
  MdCalendarMonth,
} from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi";
//import { api } from "../../services/api";


const ReservaUsuario = ( {id, dataInicio, dataFinal, produtosId} ) => {
  
  return (
    <div>
      <div className={styles.detailHeader}>
        <div className={styles.detailTitle}>
          <h1>Minhas Reservas</h1>
        </div>

        <div className={styles.detailHeaderIcon}>
          <Link to="/" className={styles.link}>
            <MdKeyboardArrowLeft size={50} />
          </Link>
        </div>
      </div>

      <div className={styles.containerReserva}>
        <div className={styles.detailReserva}>
          <div className={styles.produtoTitle}>
            <h3>Coupé</h3>
            <h2>Mercedes-Benz AMG 45</h2>
          </div>

          <div className={styles.imageContainer}>
            <img
              className={styles.imgCar}
              src={
                "https://image1.mobiauto.com.br/images/api/images/v1.0/68641751/transform/fl_progressive,f_webp,q_70"
              }
              alt="Descrição da Imagem"
            />
          </div>

          <div className={styles.checkArea}>
            <div className={styles.localizacao}>
              <MdLocationPin size={20} color="#f0572d" />
              <p>Retirada</p>
            </div>

            <div className={styles.checkIn}>
              <h4>Recife, PE</h4>
            </div>

            <div className={styles.checkIn}>
              <MdCalendarMonth size={18} />
              <span>15/12/2023</span>
              <HiOutlineClock size={18} />
              <span>15h</span>
            </div>

            <div className={styles.localizacao}>
              <MdLocationPin size={20} color="#f0572d" />
              <p>Devolução</p>
            </div>

            <div className={styles.checkOut}>
              <h4>Recife, PE</h4>
            </div>

            <div className={styles.checkOut}>
              <MdCalendarMonth size={18} />
              <span>15/12/2023</span>
              <HiOutlineClock size={18} />
              <span>15h</span>
            </div>

            <div className={styles.containerButton}>
              <button className={styles.button}>Cancelar Reserva</button>
            </div>
          </div>
        </div>

        <div className={styles.detailReserva}>
          <div className={styles.produtoTitle}>
            <h3>Coupé</h3>
            <h2>Mercedes-Benz AMG 45</h2>
          </div>

          <div className={styles.imageContainer}>
            <img
              className={styles.imgCar}
              src={
                "https://image1.mobiauto.com.br/images/api/images/v1.0/68641751/transform/fl_progressive,f_webp,q_70"
              }
              alt="Descrição da Imagem"
            />
          </div>

          <div className={styles.checkArea}>
            <div className={styles.localizacao}>
              <MdLocationPin size={20} color="#f0572d" />
              <p>Retirada</p>
            </div>

            <div className={styles.checkIn}>
              <h4>Recife, PE</h4>
            </div>

            <div className={styles.checkIn}>
              <MdCalendarMonth size={18} />
              <span>15/12/2023</span>
              <HiOutlineClock size={18} />
              <span>15h</span>
            </div>

            <div className={styles.localizacao}>
              <MdLocationPin size={20} color="#f0572d" />
              <p>Devolução</p>
            </div>

            <div className={styles.checkOut}>
              <h4>Recife, PE</h4>
            </div>

            <div className={styles.checkOut}>
              <MdCalendarMonth size={18} />
              <span>15/12/2023</span>
              <HiOutlineClock size={18} />
              <span>15h</span>
            </div>
            <div className={styles.containerButton}>
              <button className={styles.button}>Cancelar Reserva</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservaUsuario;
