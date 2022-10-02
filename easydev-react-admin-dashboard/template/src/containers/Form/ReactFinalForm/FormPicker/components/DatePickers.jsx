import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Card, CardBody, Col } from 'reactstrap';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import TimetableIcon from 'mdi-react/TimetableIcon';
import renderIntervalDatePickerField from '@/shared/components/form/IntervalDatePicker';
import renderDatePickerField from '@/shared/components/form/DatePicker';
import renderDateTimePickerField from '@/shared/components/form/DateTimePicker';

const DatePickers = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col xs={12} md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.from_picker.date_picker')}</h5>
          </div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form__form-group">
                  <span className="form__form-group-label">Default Date Picker</span>
                  <div className="form__form-group-field">
                    <Field
                      name="default_date"
                      component={renderDatePickerField}
                    />
                    <div className="form__form-group-icon">
                      <CalendarBlankIcon />
                    </div>
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Date and Time Picker</span>
                  <div className="form__form-group-field">
                    <Field
                      name="date_time"
                      component={renderDateTimePickerField}
                    />
                    <div className="form__form-group-icon">
                      <TimetableIcon />
                    </div>
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Interval Date Picker</span>
                  <div className="form__form-group-field">
                    <Field
                      name="interval_date"
                      component={renderIntervalDatePickerField}
                    />
                  </div>
                </div>
              </form>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

DatePickers.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DatePickers;
