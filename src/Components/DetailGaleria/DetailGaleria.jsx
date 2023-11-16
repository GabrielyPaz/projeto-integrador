import styles from "./DetailGaleria.module.css";
import { HiOutlineHeart, HiOutlineShare } from "react-icons/hi";
import { useState} from 'react';
import Modal from '../Modal/Modal';
//import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { register } from "swiper/element/bundle";
register();

const DetailGaleria = ( {veiculo} ) => {

  const [openModal, setOpenModal] = useState(false);

  const images = [
    {
      url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600',
      className: styles.imageModal,
    },
    {
      url: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600',
      className: styles.imageModal,
    },
    {
      url: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      className: styles.imageModal,
    },
    {
      url: 'https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      className: styles.imageModal,
    },
    {
      url: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      className: styles.imageModal,
    },
  ];
  
  const slides = [
    {
      id: 1,
      imagem:
        "https://images.pexels.com/photos/93632/pexels-photo-93632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      imagem:
        "https://images.pexels.com/photos/11790230/pexels-photo-11790230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      imagem:
        "https://images.pexels.com/photos/18369294/pexels-photo-18369294/free-photo-of-automotivo-automotor-automobilistico-carro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      imagem:
        "https://images.pexels.com/photos/7508527/pexels-photo-7508527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      imagem:
        "https://images.pexels.com/photos/11877391/pexels-photo-11877391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <HiOutlineShare size={25} />
        <HiOutlineHeart size={25} />
      </div>

      <div className={styles.containerBox}>
        <div className={styles.box1}>
          <img
            className={styles.imgCar}
            src={veiculo.img}
            alt="Descrição da Imagem"
          />
        </div>

        <div className={styles.box2}>
          <img
            className={styles.imgCar}
            src="https://images.pexels.com/photos/11790230/pexels-photo-11790230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Descrição da Imagem"
          />
        </div>
        <div className={styles.box3}>
          <img
            className={styles.imgCar}
            src="https://images.pexels.com/photos/18369294/pexels-photo-18369294/free-photo-of-automotivo-automotor-automobilistico-carro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Descrição da Imagem"
          />
        </div>
        <div className={styles.box4}>
          <img
            className={styles.imgCar}
            src="https://images.pexels.com/photos/7508527/pexels-photo-7508527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Descrição da Imagem"
          />
        </div>
        <div className={styles.box5}>
          <img
            className={styles.imgCar}
            src="https://images.pexels.com/photos/11877391/pexels-photo-11877391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Descrição da Imagem"
          />
            <button onClick={() => setOpenModal(true)} className={styles.modalButton}>Ver mais</button>
        </div>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} images={images} />
      </div>
    
      <div className={styles.carrosselContainer}>       
          <swiper-container
            //navigation
            pagination={{ clickable: true }}
                      
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1}
            speed={400}   
                   
            className={styles.carrossel}
          >
            {slides.map((item) => (
              <SwiperSlide key={item.id} className={styles.carrosselItem}>
                <img
                  src={item.imagem}
                  className={styles.carrosselImagem}
                  alt=""
                />
                <span className={styles.indexAtual}>
                  {" "}
                  {item.id} / {slides.length}{" "}
                </span>
              </SwiperSlide>
            ))}
          </swiper-container>       
      </div>
    </div>
  );
};

export default DetailGaleria;
