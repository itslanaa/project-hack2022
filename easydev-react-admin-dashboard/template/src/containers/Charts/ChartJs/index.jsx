import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import PointSizes from './components/PointSizes';
import RandomAnimatedLine from './components/RandomAnimatedLine';
import RandomAnimatedBars from './components/RandomAnimatedBars';
import PolarArea from './components/PolarArea';
import DynamicallyRefreshedDoughnut from './components/DynamicallyRefreshedDoughnut';
import LegendHandlers from './components/LegendHandlers';

const ChartsJS = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('charts.react_chartjs.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <PointSizes />
        <RandomAnimatedLine />
        <RandomAnimatedBars />
        <PolarArea />
        <DynamicallyRefreshedDoughnut />
        <LegendHandlers />
      </Row>
    </Container>
  );
};

export default ChartsJS;
