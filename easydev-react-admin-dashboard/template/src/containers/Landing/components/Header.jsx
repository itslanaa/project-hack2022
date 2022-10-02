import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row, Container } from 'reactstrap';

const background = `${process.env.PUBLIC_URL}/img/landing/header_bg.png`;
const img = `${process.env.PUBLIC_URL}/img/landing/macbook.png`;
const html = `${process.env.PUBLIC_URL}/img/landing/technologies/html.svg`;
const angular = `${process.env.PUBLIC_URL}/img/landing/technologies/angular.svg`;

const Header = () => (
  <div className="landing__header" style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <Row>
        <Col md={12}>
          <h2 className="landing__header-title">The best documented and cleanest coded
            <b> React Bootstrap 4</b> Admin Template <br />+ <b>Seed Project</b> Inside!<br />
            + (NEW) <b>Authorization</b> with Firebase, Auth0, Google and Facebook accounts
          </h2>
          <p className="landing__header-subhead">We guarantee you will always get the actual version of the template
            with a bunch of{' '}
            <NavLink className="landing__header-subhead-update" to="/documentation/changelog" target="_blank">
              freshest updates
            </NavLink>.
          </p>
          <NavLink className="landing__btn landing__btn--header" to="/documentation/introduction" target="_blank">
            Check out the docs
          </NavLink>
          <NavLink className="landing__btn landing__btn--header" to="/online_marketing_dashboard" target="_blank">
            Live demo
          </NavLink>
          <h2 className="landing__header-title">Also available on</h2>
          <div className="landing__header-language-wrap">
            <a
              className="landing__header-language"
              target="_blank"
              rel="noopener noreferrer"
              href="https://clck.ru/RE2qj"
            >
              <img src={html} alt="logo html5" />
              <p>HTML</p>
            </a>
            <a
              className="landing__header-language"
              target="_blank"
              rel="noopener noreferrer"
              href="https://clck.ru/RE2sy"
            >
              <img src={angular} alt="logo angular" />
              <p>Angular</p>
            </a>
          </div>
          <img className="landing__header-img" src={img} alt="macbook" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Header;
