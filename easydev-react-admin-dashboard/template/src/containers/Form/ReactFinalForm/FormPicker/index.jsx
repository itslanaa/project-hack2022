import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import showResults from '@/utils/showResults';
import DatePickers from './components/DatePickers';
import TimePickers from './components/TimePickers';
import ColorPickers from './components/ColorPickers';

const FormPicker = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('forms.from_picker.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <DatePickers onSubmit={showResults} />
        <TimePickers onSubmit={showResults} />
        <ColorPickers onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default FormPicker;
