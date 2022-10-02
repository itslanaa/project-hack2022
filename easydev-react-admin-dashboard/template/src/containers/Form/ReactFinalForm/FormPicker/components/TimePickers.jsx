import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Field, Form } from 'react-final-form';
import { Card, CardBody, Col } from 'reactstrap';
import renderTimePickerField from '@/shared/components/form/TimePicker';

const TimePickers = ({ onSubmit, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Col xs={12} md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.from_picker.time_picker')}</h5>
          </div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <form className="form" onSubmit={handleSubmit} autoComplete="off">
                <div className="form__form-group">
                  <span className="form__form-group-label">Default Time Picker</span>
                  <Field
                    name="time"
                    component={renderTimePickerField}
                    theme={themeName}
                  />
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Twelve hours mode</span>
                  <Field
                    name="time_twelve"
                    component={renderTimePickerField}
                    timeMode
                    theme={themeName}
                  />
                </div>
              </form>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

TimePickers.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(TimePickers);
