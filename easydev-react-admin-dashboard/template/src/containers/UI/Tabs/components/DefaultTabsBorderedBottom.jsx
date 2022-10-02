import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import Tabs from './Tabs';

const DefaultTabsBorderedBottom = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.tabs.tabs_bordered_bottom')}</h5>
            <h5 className="subhead">Use default tabs with class
              <span className="red-text"> tabs--bordered-bottom</span>
            </h5>
          </div>
          <div className="tabs tabs--bordered-bottom">
            <Tabs />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultTabsBorderedBottom;
