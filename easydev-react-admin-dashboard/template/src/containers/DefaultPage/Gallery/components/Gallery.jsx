import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import Carousel from '@brainhubeu/react-carousel';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import '@brainhubeu/react-carousel/lib/style.css';

const Gallery = ({ images, tags }) => {
  const [image, setImage] = useState(images);
  const [currentTag, setCurrentTag] = useState('all');
  const [tag] = useState(tags);
  const [isOpenLightbox, setIsOpenLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);

  const onFilter = (item) => {
    if (item === 'all') {
      setImage(images);
      setCurrentTag('all');
    } else {
      setImage(images.filter(t => t.type === item));
      setCurrentTag(item);
    }
  };

  const onChange = (value) => {
    setCurrentImage(value);
  };

  const carouselImage = () => {
    setCarouselImages(image.map(item => item.src));
  };

  const openLightbox = (index) => {
    setIsOpenLightbox(true);
    setCurrentImage(index);
    carouselImage();
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setIsOpenLightbox(false);
  };

  return (
    <div className="gallery">
      <div className="gallery__btns">
        <button
          type="button"
          className={`gallery__btn${currentTag === 'all' ? ' gallery__btn--active' : ''}`}
          onClick={() => onFilter('all')}
        >
          all
        </button>
        {tag.map(btn => (
          <button
            key={`index_${btn.tag}`}
            type="button"
            className={`gallery__btn${btn.tag === currentTag ? ' gallery__btn--active' : ''}`}
            onClick={() => onFilter(btn.tag)}
          >
            {btn.title}
          </button>
        ))}
      </div>
      {image.map((img, index) => (
        <button
          key={`index_${img.src}`}
          type="button"
          className="gallery__img-wrap"
          onClick={() => openLightbox(index)}
        >
          <img src={img.src} alt={img.alt} />
        </button>
      ))}
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
                <div key={`index_${item}`}>
                  <img src={item} alt="" />
                </div>
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

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    type: PropTypes.string,
    alt: PropTypes.string,
  })).isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    tag: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

export default Gallery;
