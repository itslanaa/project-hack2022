import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Navigation from '../navigation/Navigation';
import NavigationBottom from '../navigation/NavigationBottom';
import FireBase from './components/Firebase';
import Auth0 from './components/Auth0';
import AuthGoogleAndFb from './components/AuthGoogleAndFb';

const NavigationItem = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Authentication</h3>
      </Col>
    </Row>
    <Row className="documentation__main">
      <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
        <Navigation active="authentication" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <Auth0 />
        <AuthGoogleAndFb />
        <FireBase />
      </Col>
    </Row>
    <NavigationBottom
      prevLink="/documentation/navigation_item"
      prevTitle="Navigation Item"
      nextLink="/documentation/resources"
      nextTitle="Resources"
    />
  </Container>
);

export default NavigationItem;
