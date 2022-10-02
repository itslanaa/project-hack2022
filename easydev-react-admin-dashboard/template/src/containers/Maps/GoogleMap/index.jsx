import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import BasicMap from './components/BasicMap';
import PinWithInfoWindow from './components/PinWithInfoWindow';
import MonochromeMap from './components/MonochromeMap';

const GoogleMap = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('maps.google_map.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <BasicMap />
        <PinWithInfoWindow />
        <MonochromeMap />
      </Row>
    </Container>
  );
};

export default GoogleMap;
