import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { renderMaskedField } from '@/shared/components/form/FormField';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const maskDate = (dir, sep) => {
  if (dir === 'rtl') {
    return [/\d/, /\d/, /\d/, /\d/, sep, /\d/, /\d/, sep, /\d/, /\d/];
  }
  return [/\d/, /\d/, sep, /\d/, /\d/, sep, /\d/, /\d/, /\d/, /\d/];
};

const autoCorrectedDatePipe = (dir, sep) => {
  const format = dir === 'rtl' ? `yyyy${sep}mm${sep}dd` : `dd${sep}mm${sep}yyyy`;
  return createAutoCorrectedDatePipe(format);
};

const numberMask = createNumberMask({
  prefix: '$ ',
  allowDecimal: true,
  allowLeadingZeroes: true,
});

const ipMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/];

const all = /[A-Za-z0-9]/;
const MaskExamples = ({ onSubmit, dir }) => {
  const { t } = useTranslation('common');
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.mask_form.mask_examples')}</h5>
          </div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form__form-group">
                  <span className="form__form-group-label">Phone <span>(xxx)-xxx-xxxx</span></span>
                  <div className="form__form-group-field">
                    <Field
                      name="phone"
                      component={renderMaskedField}
                      type="text"
                      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                      className="phone-input"
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Phone with code <span>+23 xxx xx xx</span></span>
                  <div className="form__form-group-field">
                    <Field
                      name="phone_code"
                      component={renderMaskedField}
                      type="text"
                      mask={['+', '2', '3', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
                      className="phone-input"
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Date
                    <span>{`${dir === 'ltr' ? ' dd/mm/yyyy' : ' yyyy/mm/dd'}`}</span>
                  </span>
                  <div className="form__form-group-field">
                    <Field
                      name="date"
                      component={renderMaskedField}
                      type="text"
                      mask={maskDate(dir, '/')}
                      pipe={autoCorrectedDatePipe(dir, '/')}
                      keepCharPositions
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Date
                    <span>{`${dir === 'ltr' ? ' dd-mm-yyyy' : ' yyyy-mm-dd'}`}</span>
                  </span>
                  <div className="form__form-group-field">
                    <Field
                      name="date_another"
                      component={renderMaskedField}
                      type="text"
                      mask={maskDate(dir, '-')}
                      pipe={autoCorrectedDatePipe(dir, '-')}
                      keepCharPositions
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Currency <span>$xxx,xxx,xxx.xx</span></span>
                  <div className="form__form-group-field">
                    <Field
                      name="currency"
                      component={renderMaskedField}
                      type="text"
                      mask={numberMask}
                      guide={false}
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Licence key <span>xxxx-xxxx-xxxx-xxxx</span></span>
                  <div className="form__form-group-field">
                    <Field
                      name="licence"
                      component={renderMaskedField}
                      type="text"
                      mask={[
                        all, all, all, all, '-', all, all, all, all, '-', all, all, all, all, '-', all, all, all, all,
                      ]}
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">IP Address <span>xxx.xxx.xxx.xxx</span></span>
                  <div className="form__form-group-field">
                    <Field
                      name="ip"
                      component={renderMaskedField}
                      type="text"
                      mask={ipMask}
                      guide={false}
                    />
                  </div>
                </div>
                <ButtonToolbar className="form__button-toolbar">
                  <Button color="primary" type="submit">Submit</Button>
                  <Button type="button" onClick={form.reset}>
                    Cancel
                  </Button>
                </ButtonToolbar>
              </form>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

MaskExamples.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired,
};

export default MaskExamples;
