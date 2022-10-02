import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader, ModalBody, Button,
} from 'reactstrap';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import MicrosoftOfficeIcon from 'mdi-react/MicrosoftOfficeIcon';
import LogInForm from './loginForm/LogInForm';

const ModalLoginForm = ({
  title, isOpen, error, closeModal, onLogin, onFacebookLogin, onGoogleLogin, onMicrosoftLogin,
}) => (
  <Modal toggle={closeModal} className="theme-light ltr-support login-modal-form" isOpen={isOpen}>
    <ModalHeader>{title}</ModalHeader>
    <ModalBody>
      <LogInForm
        onSubmit={onLogin}
        errorMessage={error}
        form="modal_login"
        fieldUser="E-mail"
        typeFieldUser="email"
      />
      <div className="account__or">
        <p>Or Easily Using</p>
      </div>
      <div className="account__social">
        <Button
          className="account__social-btn account__social-btn--facebook"
          type="button"
          onClick={onFacebookLogin}
        >
          <FacebookIcon />
        </Button>
        <Button
          className="account__social-btn account__social-btn--google"
          type="button"
          onClick={onGoogleLogin}
        >
          <GooglePlusIcon />
        </Button>

        <Button
          className="account__social-btn account__social-btn--office"
          type="button"
          onClick={onMicrosoftLogin}
        >
          <MicrosoftOfficeIcon />
        </Button>
      </div>
    </ModalBody>
  </Modal>
);

ModalLoginForm.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onFacebookLogin: PropTypes.func,
  onGoogleLogin: PropTypes.func,
  onMicrosoftLogin: PropTypes.func,
};

ModalLoginForm.defaultProps = {
  title: '',
  error: '',
  isOpen: false,
  onFacebookLogin: () => {},
  onGoogleLogin: () => {},
  onMicrosoftLogin: () => {},
};

export default ModalLoginForm;
