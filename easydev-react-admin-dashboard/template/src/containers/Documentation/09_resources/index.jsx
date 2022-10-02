import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Navigation from '../navigation/Navigation';
import ResourcesLinks from './components/ResourcesLinks';
import NavigationBottom from '../navigation/NavigationBottom';

const Resources = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Resources</h3>
      </Col>
    </Row>
    <Row className="documentation__main">
      <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
        <Navigation active="resources" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <ResourcesLinks />
      </Col>
    </Row>
    <NavigationBottom
      prevLink="/documentation/authentication"
      prevTitle="Authentication"
      nextLink="/documentation/changelog"
      nextTitle="Changelog"
    />
  </Container>
);

export default Resources;
