import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import BasicAlerts from './components/BasicAlerts';
import BorderedAlertsWithIcons from './components/BorderedAlertsWithIcons';
import ColoredAlertsWithIcons from './components/ColoredAlertsWithIcons';
import NeutralAlertsWithIcons from './components/NeutralAlertsWithIcons';

const Alerts = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('ui_elements.alerts.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <BasicAlerts />
        <BorderedAlertsWithIcons />
        <ColoredAlertsWithIcons />
        <NeutralAlertsWithIcons />
      </Row>
    </Container>
  );
};

export default Alerts;
