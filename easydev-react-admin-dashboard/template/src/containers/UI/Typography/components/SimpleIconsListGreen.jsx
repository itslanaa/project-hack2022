import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';

const SimpleIconsListGreen = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.typography.simple_green_icon_list')}</h5>
            <h5 className="subhead">Use default ul with classes
              <span className="red-text"> icons-list icons-list--green</span>
            </h5>
          </div>
          <ul className="list list--icon list--icon-green">
            <li><p><span className="lnr lnr-checkmark-circle" />Nulla tellus elit, varius non commodo eget</p></li>
            <li><p><span className="lnr lnr-checkmark-circle" />Cum sociis natoque penatibus</p></li>
            <li><p><span className="lnr lnr-checkmark-circle" />Curabitur bibendum ornare dolor</p></li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleIconsListGreen;
