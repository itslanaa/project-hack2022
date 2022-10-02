import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { RTLProps } from '@/shared/prop-types/ReducerProps';
import HeartRate from './components/HeartRate';
import CaloriesBurn from './components/CaloriesBurn';
import Steps from './components/Steps';
import Distance from './components/Distance';
import ActivityChart from './components/ActivityChart';
import TodayRunningMap from './components/TodayRunningMap';
import MyCompetitors from './components/MyCompetitors';
import FatBurning from './components/FatBurning';
import ActivityRating from './components/ActivityRating';

const FitnessDashboard = ({ rtl }) => {
  const { t } = useTranslation('common');

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('fitness_dashboard.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <HeartRate />
        <CaloriesBurn />
        <Steps />
        <Distance />
      </Row>
      <Row>
        <ActivityChart dir={rtl.direction} />
        <TodayRunningMap />
        <MyCompetitors />
        <FatBurning dir={rtl.direction} />
        <ActivityRating dir={rtl.direction} />
      </Row>
    </Container>
  );
};

FitnessDashboard.propTypes = {
  rtl: RTLProps.isRequired,
};

export default compose(connect(state => ({
  rtl: state.rtl,
})))(FitnessDashboard);
