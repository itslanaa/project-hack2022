import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import SliderWithoutParams from './components/SliderWithoutParams';
import SliderStartPoint from './components/SliderStartPoint';
import DoubleSliderType from './components/DoubleSliderType';
import SliderWithScale from './components/SliderWithScale';

const RangeSliders = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('ui_elements.range_sliders.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <SliderWithoutParams />
        <SliderStartPoint />
        <DoubleSliderType />
        <SliderWithScale />
      </Row>
    </Container>
  );
};

export default RangeSliders;
