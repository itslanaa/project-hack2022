import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import DefaultProgressBar from './components/DefaultProgressBar';
import DataProgressBar from './components/DataProgressBar';
import AnimatedProgressBar from './components/AnimatedProgressBar';
import ColoredProgressBars from './components/ColoredProgressBars';
import MultisizedProgressBars from './components/MultisizedProgressBars';
import AnimatedMultisizedProgressBars from './components/AnimatedMultisizedProgressBars';

const ProgressBars = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('ui_elements.progress_bars.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <DefaultProgressBar />
        <DataProgressBar />
        <AnimatedProgressBar />
        <ColoredProgressBars />
        <MultisizedProgressBars />
        <AnimatedMultisizedProgressBars />
      </Row>
    </Container>
  );
};

export default ProgressBars;
