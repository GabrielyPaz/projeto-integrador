import styles from "./ReservaUsuario.module.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdLocationPin } from "react-icons/md";

const ReservaUsuario = () => {
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

          <div className={styles.localizacao}>
            <MdLocationPin size={14} />
            <p>São Paulo</p>
          </div>

          <div className={styles.checkArea}>
            <div className={styles.check}>
              <h4 className={styles.checkIn}>Check In</h4>
              <span>15/12/2023</span>
              <span>15h</span>
            </div>

            <div className={styles.check}>
              <h4 className={styles.checkOut}>Check Out</h4>
              <span>20/12/2023</span>
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

          <div className={styles.localizacao}>
            <MdLocationPin size={14} />
            <p>São Paulo</p>
          </div>

          <div className={styles.checkArea}>
            <div className={styles.check}>
              <h4 className={styles.checkIn}>Check In</h4>
              <span>15/12/2023</span>
              <span>15h</span>
            </div>

            <div className={styles.check}>
              <h4 className={styles.checkOut}>Check Out</h4>
              <span>20/12/2023</span>
             
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
