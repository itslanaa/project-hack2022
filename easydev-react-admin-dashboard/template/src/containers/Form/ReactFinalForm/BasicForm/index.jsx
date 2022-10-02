import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import showResults from '@/utils/showResults';
import HorizontalForm from './components/HorizontalForm';
import VerticalForm from './components/VerticalForm';

const BasicForm = () => {
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
        <HorizontalForm onSubmit={showResults} />
      </Row>
      <Row>
        <VerticalForm onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default BasicForm;
