import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import BasicCarousel from './components/BasicCarousel';
import BasicCarouselWithoutCaption from './components/BasicCarouselWithoutCaption';
import BasicCarouselWithCaption from './components/BasicCarouselWithCaption';

const Carousel = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('ui_elements.carousel.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <BasicCarousel />
        <BasicCarouselWithoutCaption />
        <BasicCarouselWithCaption />
      </Row>
    </Container>
  );
};

export default Carousel;
