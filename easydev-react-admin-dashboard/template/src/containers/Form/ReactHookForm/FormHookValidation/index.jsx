import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import Form from './components/Form';


const FormHookValidation = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('forms.from_validation.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <Form isHorizontal />
        <Form isHorizontal isAboveError />
      </Row>
      <Row>
        <Form />
        <Form isAboveError />
      </Row>
    </Container>
  );
};

export default FormHookValidation;
