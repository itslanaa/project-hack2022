import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import showResults from '@/utils/showResults';
import AnimatedLineFormWithLabels from './components/AnimatedLineFormWithLabels';

const FloatingLabelsForm = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('forms.floating_labels_form.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <AnimatedLineFormWithLabels onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default FloatingLabelsForm;
