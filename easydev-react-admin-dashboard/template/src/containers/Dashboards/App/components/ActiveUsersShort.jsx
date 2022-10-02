import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Progress,
} from 'reactstrap';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const ActiveUsersShort = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <CardBody className="dashboard__card-widget">
          <div className="mobile-app-widget">
            <div className="mobile-app-widget__top-line mobile-app-widget__top-line--lime">
              <p className="mobile-app-widget__total-stat">1 472</p>
              <TrendingUpIcon className="dashboard__trend-icon" />
            </div>
            <div className="mobile-app-widget__title">
              <h5>{t('app_dashboard.widget_active_users')}</h5>
            </div>
            <div className="progress-wrap progress-wrap--small progress-wrap--lime-gradient progress-wrap--label-top">
              <Progress value={32}><p className="progress__label">32%</p></Progress>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveUsersShort;
