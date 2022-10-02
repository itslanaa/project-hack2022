import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';
import { Link, Element } from 'react-scroll';
import { changeThemeToDark, changeThemeToLight } from '@/redux/actions/themeActions';
import { ThemeProps } from '@/shared/prop-types/ReducerProps';
import Header from './components/Header';
import Technologies from './components/Technologies';
import Demos from './components/Demos';
import Features from './components/Features';
import Purchase from './components/Purchase';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FeatureRequest from './components/FeatureRequest';
import Feedback from './components/Feedback';
import Code from './components/Code';
import Applications from './components/Applications';

const logo = `${process.env.PUBLIC_URL}/img/landing/logo.svg`;

const Landing = ({ dispatch, theme }) => {
  const changeToDark = () => {
    dispatch(changeThemeToDark());
  };

  const changeToLight = () => {
    dispatch(changeThemeToLight());
  };

  return (
    <div className="landing">
      <div className="landing__menu">
        <Container>
          <Row>
            <Col>
              <div className="landing__menu-wrap">
                <div className="landing__menu-logo">
                  <img src={logo} alt="" />
                </div>
                <nav className="landing__menu-nav">
                  <div className="landing__menu-nav--button">
                    <Link activeClass="active" to="about" spy smooth duration={500}>
                      <button type="button">
                        About EasyDEV
                      </button>
                    </Link>
                    <Link activeClass="active" to="features" spy smooth duration={1000}>
                      <button type="button">
                        Features
                      </button>
                    </Link>
                    <Link activeClass="active" to="demos" spy smooth duration={1500}>
                      <button type="button">
                        Demos
                      </button>
                    </Link>
                    <Link activeClass="active" to="feature_request" spy smooth duration={2000}>
                      <button type="button">
                        Feature request
                        <span className="landing__menu-nav-new" />
                      </button>
                    </Link>
                  </div>
                  <div>
                    <a
                      className="landing__btn landing__btn--nav landing__btn--gradient"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://1.envato.market/Buy-now-React"
                    >
                      Buy now
                    </a>
                    <a
                      className="landing__btn landing__btn--nav landing__btn--hire-us"
                      target="_blank"
                      rel="noopener noreferrer"
                      // eslint-disable-next-line max-len
                      href="https://aspirity.com/easydev?utm_source=easydev_landing&utm_medium=referral&utm_campaign=templates#hireus"
                    >
                      Hire Us
                    </a>
                  </div>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Header />
      <Element name="about" />
      <Technologies />
      <Feedback />
      <Code />
      <Element name="features" />
      <Features />
      <Element name="demos" />
      <Demos theme={theme} changeToDark={changeToDark} changeToLight={changeToLight} />
      <Applications />
      <Element name="feature_request" />
      <FeatureRequest />
      <Testimonials />
      <Purchase />
      <Footer />
    </div>
  );
};

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired,
  theme: ThemeProps.isRequired,
};

export default connect(state => ({ theme: state.theme }))(Landing);
