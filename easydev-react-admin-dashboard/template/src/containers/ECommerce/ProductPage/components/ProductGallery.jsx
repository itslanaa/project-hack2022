import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import Carousel from '@brainhubeu/react-carousel';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import '@brainhubeu/react-carousel/lib/style.css';

const ProductGallery = ({ images }) => {
  const [isOpenLightbox, setIsOpenLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImagePreview, setCurrentImagePreview] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);

  const changeImg = (item) => {
    setCurrentImagePreview(item);
    setCurrentImage(item);
  };

  const carouselImage = () => {
    setCarouselImages(images);
  };

  const openLightbox = (index) => {
    carouselImage();
    setCurrentImage(index);
    setIsOpenLightbox(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setIsOpenLightbox(false);
  };

  const onChange = (value) => {
    setCurrentImage(value);
  };

  return (
    <div className="product-gallery">
      <button
        type="button"
        className="product-gallery__current-img"
        onClick={() => openLightbox(currentImage)}
      >
        <img src={images[currentImagePreview].src} alt="product-img" />
      </button>
      <div className="product_gallery__gallery">
        {images.map((item, index) => (
          <button
            type="button"
            key={`index_${item.src}`}
            onClick={() => changeImg(index)}
            className="product-gallery__img-preview"
          >
            <img src={item.src} alt="product-img" />
          </button>
        ))}
      </div>
      <Modal
        isOpen={isOpenLightbox}
        toggle={closeLightbox}
        className="modal-dialog--primary modal-dialog--carousel"
      >
        <div className="modal__body">
          <div className="modal__header">
            <button
              className="lnr lnr-cross modal__close-btn"
              type="button"
              aria-label="close lightbox button"
              onClick={closeLightbox}
            />
          </div>
          <Carousel
            value={currentImage}
            onChange={onChange}
            slides={
              carouselImages.map(item => (
                <img key={`index_${item.src}`} src={item.src} alt="" />
              ))
            }
            addArrowClickHandler
            arrowLeft={(
              <div className="modal__btn">
                <ChevronLeftIcon className="modal__btn_left" />
              </div>
            )}
            arrowRight={(
              <div className="modal__btn">
                <ChevronRightIcon className="modal__btn_right" />
              </div>
            )}
          />
          <div className="modal__footer">
            <p>{currentImage + 1} of {carouselImages.length}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
};

export default ProductGallery;
