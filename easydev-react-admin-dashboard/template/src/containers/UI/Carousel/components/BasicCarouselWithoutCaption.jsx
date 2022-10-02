import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import Carousel from '@/shared/components/carousel/CarouselSingle';

const data = [
  { id: 0, src: `${process.env.PUBLIC_URL}/img/5.png` },
  { id: 1, src: `${process.env.PUBLIC_URL}/img/6.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/img/5.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/img/6.png` },
];

const BasicCarouselWithoutCaption = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.carousel.basic_carousel_without_caption')}</h5>
            <h5 className="subhead">Use the component <span className="red-text">CarouselSingle</span></h5>
          </div>
          <Carousel>
            {data.map(item => (
              <div key={item.id}>
                <img src={item.src} alt={`slide_${item.src}`} />
              </div>
            ))}
          </Carousel>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicCarouselWithoutCaption;
