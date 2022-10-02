import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import ChatCard from './components/ChatCard';

const Chat = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('chat_application.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <ChatCard />
      </Row>
    </Container>
  );
};

export default Chat;
