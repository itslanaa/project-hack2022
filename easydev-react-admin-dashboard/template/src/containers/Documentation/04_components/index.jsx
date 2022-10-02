import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Navigation from '../navigation/Navigation';
import Alerts from './components/Alerts';
import Intro from './components/Intro';
import Buttons from './components/Buttons';
import Carousel from './components/Carousel';
import Collapse from './components/Collapse';
import Modals from './components/Modals';
import Panel from './components/Panel';
import ProgressBars from './components/ProgressBars';
import RangeSliders from './components/RangeSliders';
import Tabs from './components/Tabs';
import TimeLine from './components/TimeLine';
import Tooltips from './components/Tooltips';
import Popovers from './components/Popovers';
import NavigationBottom from '../navigation/NavigationBottom';

const Components = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Components</h3>
      </Col>
    </Row>
    <Row className="documentation__main">
      <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
        <Navigation active="components" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <Intro />
        <Alerts />
        <Buttons />
        <Carousel />
        <Collapse />
        <Modals />
        <Panel />
        <Popovers />
        <ProgressBars />
        <RangeSliders />
        <Tabs />
        <TimeLine />
        <Tooltips />
      </Col>
    </Row>
    <NavigationBottom
      prevLink="/documentation/file_structure"
      prevTitle="File Structure"
      nextLink="/documentation/form"
      nextTitle="Form"
    />
  </Container>
);

export default Components;
