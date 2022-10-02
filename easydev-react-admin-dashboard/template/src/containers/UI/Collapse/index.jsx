import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import MinimalCollapse from './components/MinimalCollapse';
import BoxedCollapse from './components/BoxedCollapse';
import BoxedCollapseFullWidth from './components/BoxedCollapseFullWidth';

const Collapse = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('ui_elements.collapse.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <MinimalCollapse />
        <BoxedCollapse />
        <BoxedCollapseFullWidth />
      </Row>
    </Container>
  );
};

export default Collapse;
