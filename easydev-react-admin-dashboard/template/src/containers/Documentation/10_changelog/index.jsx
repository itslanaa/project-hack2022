import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Navigation from '../navigation/Navigation';
import ChangelogList from './components/ChangelogList';
import NavigationBottom from '../navigation/NavigationBottom';

const Changelog = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Changelog</h3>
      </Col>
    </Row>
    <Row className="documentation__main">
      <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
        <Navigation active="changelog" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <ChangelogList />
      </Col>
    </Row>
    <NavigationBottom
      prevLink="/documentation/resources"
      prevTitle="Resources"
      nextLink="/documentation/faq"
      nextTitle="FAQ Troubleshooting"
    />
  </Container>
);

export default Changelog;
