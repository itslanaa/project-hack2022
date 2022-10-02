import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import Tabs from './Tabs';

const DefaultTabs = () => {
  const { t } = useTranslation('common');

  return (
    <Col xs={12} md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.tabs.default_tabs')}</h5>
            <h5 className="subhead">Use default tabs</h5>
          </div>
          <div className="tabs">
            <Tabs />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultTabs;
