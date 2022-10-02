import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import {
  Button, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { renderMaskedField } from '../../../../shared/components/form/FormField';

const moneyMask = createNumberMask({
  prefix: '$ ',
  suffix: '',
  thousandsSeparatorSymbol: ' ',
});

const NewOrderEditForm = ({ onSubmit, initialValues }) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Edit {initialValues.title}</h5>
        </div>
        <Form onSubmit={onSubmit} initialValues={initialValues}>
          {({ handleSubmit }) => (
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Title</span>
                <div className="form__form-group-field">
                  <Field
                    name="title"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Quantity</span>
                <div className="form__form-group-field">
                  <Field
                    name="quantity"
                    component="input"
                    type="number"
                    parse={value => (parseInt(value, 10))}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Sold</span>
                <div className="form__form-group-field">
                  <Field
                    name="sold"
                    component="input"
                    type="number"
                    parse={value => (parseInt(value, 10))}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Total</span>
                <div className="form__form-group-field">
                  <Field
                    name="total"
                    component={renderMaskedField}
                    type="text"
                    mask={moneyMask}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Image URL</span>
                <div className="form__form-group-field">
                  <Field
                    name="img"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
                <Link className="btn btn-secondary" to="/e_commerce_dashboard">Cancel</Link>
              </ButtonToolbar>
            </form>
          )}
        </Form>
      </CardBody>
    </Card>
  </Col>
);

NewOrderEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  initialValues: state.newOrder.data,
});

export default connect(mapStateToProps)(NewOrderEditForm);
