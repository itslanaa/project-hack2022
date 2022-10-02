import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Progress,
} from 'reactstrap';

const AnimatedProgressBar = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.progress_bars.animated_progress_bar')}</h5>
            <h5 className="subhead">Use default progress with property <span className="red-text">animated</span></h5>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress animated value={70} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedProgressBar;
