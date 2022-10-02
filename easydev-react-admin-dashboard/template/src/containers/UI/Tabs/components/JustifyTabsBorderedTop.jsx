import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import Tabs from './Tabs';

const JustifyTabsBorderedTop = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.tabs.justify_tabs_bordered_top')}</h5>
            <h5 className="subhead">Use default progress with class
              <span className="red-text"> tabs--justify tabs--bordered-top</span>
            </h5>
          </div>
          <div className="tabs tabs--justify tabs--bordered-top">
            <Tabs />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JustifyTabsBorderedTop;
