import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import InboxCard from './components/InboxCard';

const Mail = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('mail_application.page_title')}</h3>
          <h3 className="page-subhead subhead">You can compose an email here</h3>
        </Col>
      </Row>
      <Row>
        <InboxCard />
      </Row>
    </Container>
  );
};

export default Mail;
