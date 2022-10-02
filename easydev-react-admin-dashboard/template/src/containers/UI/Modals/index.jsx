import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import DefaultModals from './components/DefaultModals';
import ColoredModals from './components/ColoredModals';
import HeaderModals from './components/HeaderModals';

const Modals = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('ui_elements.modals.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <DefaultModals />
        <ColoredModals />
        <HeaderModals />
      </Row>
    </Container>
  );
};

export default Modals;
