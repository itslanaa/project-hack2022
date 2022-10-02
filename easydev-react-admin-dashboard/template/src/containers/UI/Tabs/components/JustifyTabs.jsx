import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import Tabs from './Tabs';

const JustifyTabs = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.tabs.justify_tabs')}</h5>
            <h5 className="subhead">Use default tabs with class <span className="red-text">tabs--justify</span></h5>
          </div>
          <div className="tabs tabs--justify">
            <Tabs />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JustifyTabs;
