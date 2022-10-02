import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import Tabs from './Tabs';

const VerticalTabs = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xs={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.tabs.vertical_tabs')}</h5>
            <h5 className="subhead">Use default progress with class
              <span className="red-text"> tabs--vertical</span>
            </h5>
          </div>
          <div className="tabs tabs--vertical">
            <Tabs />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalTabs;
