import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import showResults from '@/utils/showResults';
import DefaultControls from './components/DefaultControls';
import ColoredControls from './components/ColoredControls';
import ColoredControlsOnClick from './components/ColoredControlsOnClick';
import ButtonTypeControls from './components/ButtonTypeControls';

const CheckFormControls = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('forms.check_form_controls.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <DefaultControls onSubmit={showResults} />
        <ColoredControls onSubmit={showResults} />
        <ColoredControlsOnClick onSubmit={showResults} />
        <ButtonTypeControls onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default CheckFormControls;
