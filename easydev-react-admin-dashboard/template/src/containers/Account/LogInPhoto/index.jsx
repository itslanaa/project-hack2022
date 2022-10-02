import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import FirebaseIcon from 'mdi-react/FirebaseIcon';
import withAuthFirebase from '@/shared/components/auth/withAuthFirebase';
import LogInFormPhoto from '@/shared/components/loginPhotoForm/LogInFormPhoto';
import showResults from '@/utils/showResults';
import GoogleAuthBtn from '../AuthBtn/googleAuthBtn';
import FacebookAuthBtn from '../AuthBtn/fbAuthBtn';
import MicrosoftAuthBtn from '../AuthBtn/microsoftAuthBtn';
import { login as loginAuth0 } from '../../../shared/components/auth/withAuth0';

const auth0Icon = `${process.env.PUBLIC_URL}/img/auth0.svg`;

const LogInPhoto = ({ changeIsOpenModalFireBase }) => (
  <div className="account account--photo">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">Welcome to
            <span className="account__logo"> Easy
              <span className="account__logo-accent">DEV</span>
            </span>
          </h3>
          <h4 className="account__subhead subhead">Start your business easily</h4>
        </div>
        <LogInFormPhoto
          onSubmit={showResults}
          form="log_in_form"
        />
        <div className="account__or">
          <p>Or Easily Using</p>
        </div>
        <div className="account__social">
          <FacebookAuthBtn />
          <GoogleAuthBtn />
          <MicrosoftAuthBtn />
          <Button
            className="account__social-btn account__social-btn--firebase"
            onClick={changeIsOpenModalFireBase}
          >
            <FirebaseIcon />
          </Button>
          <Button className="account__social-btn account__social-btn--auth0" onClick={loginAuth0}>
            <img className="customizer__btn-icon" src={auth0Icon} alt="icon" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

LogInPhoto.propTypes = {
  changeIsOpenModalFireBase: PropTypes.func.isRequired,
};

export default withAuthFirebase(LogInPhoto);
