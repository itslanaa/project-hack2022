import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { Button, ButtonToolbar } from 'reactstrap';

const SellBTC = ({ onSubmit }) => (
  <div className="dashboard__place-order-form">
    <h5 className="bold-text">Sell BTC</h5>
    <h5 className="dashboard__place-order-form-subhead subhead">BTC Balance: 2.232344</h5>
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form className="form form--horizontal" onSubmit={handleSubmit}>
          <div className="form__form-group">
            <span className="form__form-group-label">Price</span>
            <div className="form__form-group-field">
              <Field
                name="price"
                component="input"
                type="text"
                placeholder="$ 1322323,3"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Amount</span>
            <div className="form__form-group-field">
              <Field
                name="amount"
                component="input"
                type="text"
                placeholder="0,000334 BTC"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Total</span>
            <div className="form__form-group-field">
              <Field
                name="total"
                component="input"
                type="text"
                placeholder="$ 112,454"
              />
            </div>
          </div>
          <ButtonToolbar className="form__button-toolbar">
            <Button color="success" type="submit">Sell BTC</Button>
          </ButtonToolbar>
        </form>
      )}
    </Form>
  </div>
);

SellBTC.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SellBTC;
