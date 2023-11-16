import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight  } from "react-icons/md";

const Modal = ({ isOpen, setModalOpen, images }) => {
  const [currentImage, setCurrentImage] = useState(1);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 1 ? images.length : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length ? 1 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentImage(index + 1);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          <div className={styles.modal}>
            <div className={styles.modalElements}>
              <div className={styles.closeArea}>
                <IoClose className={styles.closeButton} size={24} onClick={setModalOpen} />
              </div>

              <div className={styles.carouselContainer}>
                <div className={styles.mainImage}>
                  <img src={images[currentImage - 1].url} alt={`Imagem ${currentImage}`} className={images[currentImage - 1].className} />
                  <div className={styles.orderIndicator}>{`${currentImage}/${images.length}`}</div>
                </div>
            
                <div className={styles.navigationArrows}>
                  <MdKeyboardArrowLeft size={40} onClick={handlePrev} />
                  <MdKeyboardArrowRight size={40} onClick={handleNext} />
                </div>

                <div className={styles.thumbnails}>
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => handleThumbnailClick(index)}
                      // className={`${image.className} ${styles.thumbnail}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Modal;