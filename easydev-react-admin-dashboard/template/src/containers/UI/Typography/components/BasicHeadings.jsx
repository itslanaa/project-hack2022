import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';

const BasicHeadings = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.typography.basic_heading')}</h5>
            <h5 className="subhead">Use tags <span className="red-text">h1 to h6</span> for get necessary heading.
            </h5>
          </div>
          <div className="typography-card">
            <h1>H1 Type something </h1>
            <h2>H2 Type something </h2>
            <h3>H3 Type something </h3>
            <h4>H4 Type something </h4>
            <h5>H5 Type something </h5>
            <h6>H6 Type something </h6>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicHeadings;
