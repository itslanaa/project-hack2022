import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Navigation from '../navigation/Navigation';
import InstallationSteps from './components/InstallationSteps';
import NavigationBottom from '../navigation/NavigationBottom';

const Installation = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Installation</h3>
      </Col>
    </Row>
    <Row className="documentation__main">
      <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
        <Navigation active="installation" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <InstallationSteps />
      </Col>
    </Row>
    <NavigationBottom
      prevLink="/documentation/introduction"
      prevTitle="Introduction"
      nextLink="/documentation/file_structure"
      nextTitle="File Structure"
    />
  </Container>
);

export default Installation;
