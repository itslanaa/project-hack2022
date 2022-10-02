import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import DefaultDatepicker from './components/DefaultDatepicker';

const Datepicker = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Datepicker</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show datepicker.</h3>
      </Col>
    </Row>
    <Row>
      <DefaultDatepicker />
    </Row>
  </Container>
);

export default Datepicker;
