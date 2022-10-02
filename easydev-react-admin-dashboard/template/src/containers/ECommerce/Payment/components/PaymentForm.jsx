import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, Form } from 'react-final-form';
import * as PropTypes from 'prop-types';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import CreditCardIcon from 'mdi-react/CreditCardIcon';
import renderRadioButtonField from '@/shared/components/form/RadioButton';
import { renderMaskedField } from '../../../../shared/components/form/FormField';

const MasterCard = `${process.env.PUBLIC_URL}/img/for_store/cards/mc.svg`;
const VisaCard = `${process.env.PUBLIC_URL}/img/for_store/cards/visa.svg`;
const PayPal = `${process.env.PUBLIC_URL}/img/for_store/cards/paypal.svg`;

const datePipe = createAutoCorrectedDatePipe('dd/mm/yyyy');

const PaymentForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit} initialValues={{ card: 'mc' }}>
    {({ handleSubmit }) => (
      <form className="form payment__credit-cards" onSubmit={handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label">Choose payment method:</span>
          <div className="form__form-group-field">
            <div className="payment__credit-card">
              <Field
                name="card"
                component={renderRadioButtonField}
                // eslint-disable-next-line
                label={<div><img className="payment__credit-card_img" src={MasterCard} alt="mc" /><p className="payment__credit-name">MasterCard</p></div>}
                radioValue="mc"
              />
            </div>
            <div className="payment__credit-card">
              <Field
                name="card"
                component={renderRadioButtonField}
                // eslint-disable-next-line
                label={<div><img className="payment__credit-card_img" src={VisaCard} alt="visa" /><p className="payment__credit-name">Visa</p></div>}
                radioValue="visa"
              />
            </div>
            <div className="payment__credit-card">
              <Field
                name="card"
                component={renderRadioButtonField}
                // eslint-disable-next-line
                label={<div><img className="payment__credit-card_img" src={PayPal} alt="paypal" /><p className="payment__credit-name">PayPal</p></div>}
                radioValue="paypal"
              />
            </div>
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Card number</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <CreditCardIcon />
            </div>
            <Field
              name="card_number"
              component={renderMaskedField}
              type="text"
              mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              placeholder="xxxx-xxxx-xxxx-xxxx"
            />
          </div>
        </div>
        <div className="form__form-group-date-cvc">
          <div className="form__form-group form__form-group-date">
            <span className="form__form-group-label">Expiration Date</span>
            <div className="form__form-group-field">
              <Field
                name="date"
                component={renderMaskedField}
                type="text"
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                pipe={datePipe}
                placeholder="DD/MM/YY"
                keepCharPositions
              />
            </div>
          </div>
          <div className="form__form-group form__form-group-cvc">
            <span className="form__form-group-label">CVC</span>
            <div className="form__form-group-field">
              <Field
                name="cvc"
                component={renderMaskedField}
                type="text"
                mask={[/\d/, /\d/, /\d/]}
              />
            </div>
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Cardholder name</span>
          <div className="form__form-group-field">
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Name and Surname"
            />
          </div>
        </div>
        <h4 className="payment__total">Total Price: $348.00</h4>
        <ButtonToolbar className="form__button-toolbar">
          <Button color="primary" type="submit">Make Payment</Button>
        </ButtonToolbar>
      </form>
    )}
  </Form>
);

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PaymentForm;
