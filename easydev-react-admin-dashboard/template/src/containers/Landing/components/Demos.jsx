import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'reactstrap';
import { ThemeProps } from '@/shared/prop-types/ReducerProps';

const onlineMarketing = `${process.env.PUBLIC_URL}/img/landing/demos/online_marketing_light.png`;
const eCommerce = `${process.env.PUBLIC_URL}/img/landing/demos/e_commerce_light.png`;
const app = `${process.env.PUBLIC_URL}/img/landing/demos/app_light.png`;
const booking = `${process.env.PUBLIC_URL}/img/landing/demos/booking_light.png`;
const finance = `${process.env.PUBLIC_URL}/img/landing/demos/finance_light.png`;
const fitness = `${process.env.PUBLIC_URL}/img/landing/demos/fitness_light.png`;

const onlineMarketingDark = `${process.env.PUBLIC_URL}/img/landing/demos/online_market_dark.png`;
const eCommerceDark = `${process.env.PUBLIC_URL}/img/landing/demos/e_commerce_dark.png`;
const appDark = `${process.env.PUBLIC_URL}/img/landing/demos/app_dark.png`;
const bookingDark = `${process.env.PUBLIC_URL}/img/landing/demos/booking_dark.png`;
const financeDark = `${process.env.PUBLIC_URL}/img/landing/demos/finance_dark.png`;
const fitnessDark = `${process.env.PUBLIC_URL}/img/landing/demos/fitness_dark.png`;

const background = `${process.env.PUBLIC_URL}/img/landing/left_bg.png`;

const DemoThemeToggle = ({ theme, changeToLight, changeToDark }) => (
  <div className="landing__demo-toggle-wrap">
    <span>Light</span>
    <div className="toggle-btn landing__demo-toggle">
      <input
        className="toggle-btn__input"
        type="checkbox"
        name="demos"
        checked={theme.className === 'theme-dark'}
        onChange={() => {}}
      />
      <button
        type="button"
        className="toggle-btn__input-label"
        onClick={theme.className === 'theme-dark' ? changeToLight : changeToDark}
      >Toggle
      </button>
    </div>
    <span>Dark</span>
  </div>
);

DemoThemeToggle.propTypes = {
  theme: ThemeProps.isRequired,
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
};

const Demos = ({ theme, changeToLight, changeToDark }) => (
  <section className="landing__section landing__section--demos">
    <img className="landing__section-background landing__section-background--demos" src={background} alt="" />
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="landing__section-title">EasyDEV Demos</h3>
        </Col>
      </Row>
      <Row className="landing__demo-wrap">
        <Col lg={8}>
          <Link className="landing__demo" target="_blank" to="/online_marketing_dashboard">
            <div className="landing__demo-img-wrap">
              <img src={theme.className === 'theme-dark' ? onlineMarketingDark : onlineMarketing} alt="" />
            </div>
          </Link>
        </Col>
        <Col lg={4} className="landing__demo-theme-toggle">
          <p className="landing__demo-title">Online Marketing Dashboard</p>
          <DemoThemeToggle theme={theme} changeToLight={changeToLight} changeToDark={changeToDark} />
        </Col>
      </Row>
      <Row className="landing__demo-wrap">
        <Col lg={8}>
          <Link className="landing__demo" target="_blank" to="/e_commerce_dashboard">
            <div className="landing__demo-img-wrap">
              <img src={theme.className === 'theme-dark' ? eCommerceDark : eCommerce} alt="" />
            </div>
          </Link>
        </Col>
        <Col lg={4} className="landing__demo-theme-toggle">
          <p className="landing__demo-title">E-commerce Dashboard</p>
          <DemoThemeToggle theme={theme} changeToLight={changeToLight} changeToDark={changeToDark} />
        </Col>
      </Row>
      <Row className="landing__demo-wrap">
        <Col lg={8}>
          <Link className="landing__demo" target="_blank" to="/app_dashboard">
            <div className="landing__demo-img-wrap">
              <img src={theme.className === 'theme-dark' ? appDark : app} alt="" />
            </div>
          </Link>
        </Col>
        <Col lg={4} className="landing__demo-theme-toggle">
          <p className="landing__demo-title">App Dashboard</p>
          <DemoThemeToggle theme={theme} changeToLight={changeToLight} changeToDark={changeToDark} />
        </Col>
      </Row>
      <Row className="landing__demo-wrap">
        <Col lg={8}>
          <Link className="landing__demo" target="_blank" to="/booking_dashboard">
            <div className="landing__demo-img-wrap">
              <img src={theme.className === 'theme-dark' ? bookingDark : booking} alt="" />
            </div>
          </Link>
        </Col>
        <Col lg={4} className="landing__demo-theme-toggle">
          <p className="landing__demo-title">Booking Dashboard</p>
          <DemoThemeToggle theme={theme} changeToLight={changeToLight} changeToDark={changeToDark} />
        </Col>
      </Row>
      <Row className="landing__demo-wrap">
        <Col lg={8}>
          <Link className="landing__demo" target="_blank" to="/finance_dashboard">
            <div className="landing__demo-img-wrap">
              <img src={theme.className === 'theme-dark' ? financeDark : finance} alt="" />
            </div>
          </Link>
        </Col>
        <Col lg={4} className="landing__demo-theme-toggle">
          <p className="landing__demo-title">Finance Dashboard</p>
          <DemoThemeToggle theme={theme} changeToLight={changeToLight} changeToDark={changeToDark} />
        </Col>
      </Row>
      <Row className="landing__demo-wrap">
        <Col lg={8}>
          <Link className="landing__demo" target="_blank" to="/fitness_dashboard">
            <div className="landing__demo-img-wrap">
              <img src={theme.className === 'theme-dark' ? fitnessDark : fitness} alt="" />
            </div>
          </Link>
        </Col>
        <Col lg={4} className="landing__demo-theme-toggle">
          <p className="landing__demo-title">Fitness Dashboard</p>
          <DemoThemeToggle theme={theme} changeToLight={changeToLight} changeToDark={changeToDark} />
        </Col>
      </Row>
    </Container>
  </section>
);

Demos.propTypes = {
  theme: ThemeProps.isRequired,
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
};

export default Demos;
