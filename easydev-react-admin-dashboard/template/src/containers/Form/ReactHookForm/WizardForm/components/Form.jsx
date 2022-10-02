import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, Row, CardBody,
} from 'reactstrap';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const WizardForm = ({ onSubmit }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});

  const nextPage = (newData) => {
    setData(newData);
    setPage(page + 1);
  };

  const previousPage = (newData) => {
    setData(newData);
    setPage(page - 1);
  };

  const submitHandler = (newData) => {
    setData(newData);
    onSubmit(newData);
  };

  return (
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <CardBody className="wizard">
            <div className="wizard__steps">
              <div className={`wizard__step${page === 1 ? ' wizard__step--active' : ''}`}><p>Step 1</p></div>
              <div className={`wizard__step${page === 2 ? ' wizard__step--active' : ''}`}><p>Step 2</p></div>
              <div className={`wizard__step${page === 3 ? ' wizard__step--active' : ''}`}><p>Step 3</p></div>
            </div>
            <div className="wizard__form-wrapper">
              {page === 1 && <StepOne onSubmit={nextPage} defaultValues={data} />}
              {page === 2 && <StepTwo previousPage={previousPage} onSubmit={nextPage} defaultValues={data} />}
              {page === 3 && <StepThree previousPage={previousPage} onSubmit={submitHandler} defaultValues={data} />}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;
