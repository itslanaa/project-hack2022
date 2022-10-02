import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import DatepickerField from './DatepickerField';

const DefaultDatepicker = () => (
  <Col xs={12} md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Default datepicker</h5>
          <h5 className="subhead">Use default datepicker</h5>
        </div>
        <div className="d-flex">
          <DatepickerField
            name="Default"
            dateFormat="MM/dd/yyyy"
          />
          <DatepickerField
            name="With time select"
            dateFormat="MM/dd/yyyy:HH:mm"
            showTimeSelect
          />

          <DatepickerField
            name="With time input"
            dateFormat="MM/dd/yyyy:HH:mm"
            showTimeInput
          />
          <DatepickerField
            name="Clearable datepicker"
            isClearable
            dateFormat="MM/dd/yyyy"
          />
          <DatepickerField
            name="Disabled"
            disabled
          />
          <DatepickerField
            name="Month Picker"
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </div>
      </CardBody>
    </Card>
  </Col>
);


export default DefaultDatepicker;
