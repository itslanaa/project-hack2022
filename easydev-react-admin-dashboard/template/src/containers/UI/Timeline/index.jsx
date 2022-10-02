import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import TimelineHistory from './components/TimelineHistory';

const Timeline = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('ui_elements.timeline.title')}</h3>
          <h3 className="page-subhead subhead">This interface let you to see your activity history</h3>
        </Col>
      </Row>
      <Row>
        <TimelineHistory />
      </Row>
    </Container>
  );
};

export default Timeline;
