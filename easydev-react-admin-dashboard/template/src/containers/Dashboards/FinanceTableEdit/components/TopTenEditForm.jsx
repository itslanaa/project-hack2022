import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { renderMaskedField } from '@/shared/components/form/FormField';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const moneyMask = createNumberMask({
  prefix: '$ ',
  suffix: '',
  thousandsSeparatorSymbol: ' ',
});

const percentMask = createNumberMask({
  prefix: '',
  suffix: '%',
  allowDecimal: true,
  decimalSymbol: ',',
});

const TopTenEditForm = ({ onSubmit, initialValues }) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Edit {initialValues.name}</h5>
        </div>
        <Form onSubmit={onSubmit} initialValues={initialValues}>
          {({ handleSubmit }) => (
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Market Cap</span>
                <div className="form__form-group-field">
                  <Field
                    name="market_cap"
                    component={renderMaskedField}
                    type="text"
                    mask={moneyMask}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Price</span>
                <div className="form__form-group-field">
                  <Field
                    name="price"
                    component={renderMaskedField}
                    type="text"
                    mask={moneyMask}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Volume</span>
                <div className="form__form-group-field">
                  <Field
                    name="volume"
                    component={renderMaskedField}
                    type="text"
                    mask={moneyMask}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Supply</span>
                <div className="form__form-group-field">
                  <Field
                    name="supply"
                    component={renderMaskedField}
                    type="text"
                    mask={moneyMask}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Change</span>
                <div className="form__form-group-field">
                  <Field
                    name="change"
                    component={renderMaskedField}
                    type="text"
                    mask={percentMask}
                  />
                </div>
              </div>
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
                <Link className="btn btn-secondary" to="/finance_dashboard">Cancel</Link>
              </ButtonToolbar>
            </form>
          )}
        </Form>
      </CardBody>
    </Card>
  </Col>
);

TopTenEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  initialValues: state.cryptoTable.data,
});

export default connect(mapStateToProps)(TopTenEditForm);
