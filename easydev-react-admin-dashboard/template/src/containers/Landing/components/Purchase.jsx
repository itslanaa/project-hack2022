import React from 'react';
import { Col, Row, Container } from 'reactstrap';

const Purchase = () => (
  <section className="landing__section">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="landing__section-title">
            Get the <b>EasyDEV React Bootstrap 4 Admin Template</b> and save your time and nerves
          </h3>
          <div className="landing__center-btn">
            <a
              className="landing__btn landing__btn--gradient"
              target="_blank"
              rel="noopener noreferrer"
              href="https://1.envato.market/Buy-now-React"
            >
              Purchase now
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Purchase;
