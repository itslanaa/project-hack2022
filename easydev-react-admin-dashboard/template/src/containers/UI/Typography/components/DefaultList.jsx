import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';

const DefaultList = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.typography.default_list')}</h5>
            <h5 className="subhead">Use default <span className="red-text">ul</span></h5>
          </div>
          <ul className="list">
            <li><p>Nulla tellus elit, varius non commodo eget</p></li>
            <li><p>Cum sociis natoque penatibus</p></li>
            <li><p>Curabitur bibendum ornare dolor</p></li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultList;
