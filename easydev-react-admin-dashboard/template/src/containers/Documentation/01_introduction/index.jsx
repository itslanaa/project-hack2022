import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Navigation from '../navigation/Navigation';
import IntroductionFeatures from './components/IntroductionFeatures';
import NavigationBottom from '../navigation/NavigationBottom';

const Introduction = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Introduction</h3>
      </Col>
    </Row>
    <Row className="documentation__main">
      <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
        <Navigation active="introduction" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <IntroductionFeatures />
      </Col>
    </Row>
    <NavigationBottom nextLink="/documentation/installation" nextTitle="Installation" />
  </Container>
);

export default Introduction;
