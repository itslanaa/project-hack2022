import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import Form from './components/Form';

const BasicHookForm = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('forms.basic_form.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <Form isHorizontal />
      </Row>
      <Row>
        <Form />
      </Row>
    </Container>
  );
};

export default BasicHookForm;
