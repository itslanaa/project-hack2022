import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, Row, CardBody,
} from 'reactstrap';
import WizardFormOne from './WizardFormOne';
import WizardFormTwo from './WizardFormTwo';
import WizardFormThree from './WizardFormThree';

const WizardForm = ({ onSubmit }) => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);

  const nextPage = (values) => {
    setPage(page + 1);
    setData(values);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const handleSubmit = (values) => {
    setData(values);
    onSubmit(values);
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
              {page === 1 && <WizardFormOne onSubmit={nextPage} initialValues={data} />}
              {page === 2
              && (
              <WizardFormTwo
                previousPage={previousPage}
                onSubmit={nextPage}
                initialValues={data}
              />
              )}
              {page === 3
              && (
              <WizardFormThree
                previousPage={previousPage}
                onSubmit={handleSubmit}
                initialValues={data}
              />
              )}
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
