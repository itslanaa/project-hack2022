import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Navigation from '../navigation/Navigation';
import AddNewNavItem from './components/AddNewNavItem';
import NavigationBottom from '../navigation/NavigationBottom';

const NavigationItem = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Navigation Item</h3>
      </Col>
    </Row>
    <Row className="documentation__main">
      <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
        <Navigation active="navigation_item" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <AddNewNavItem />
      </Col>
    </Row>
    <NavigationBottom
      prevLink="/documentation/color_themes"
      prevTitle="Color Themes"
      nextLink="/documentation/authentication"
      nextTitle="Authentication"
    />
  </Container>
);

export default NavigationItem;
