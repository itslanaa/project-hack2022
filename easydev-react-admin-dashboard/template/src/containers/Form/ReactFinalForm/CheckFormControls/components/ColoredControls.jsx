import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-final-form';
import { Card, CardBody, Col } from 'reactstrap';
import SelectColorGroup from './SelectColorGroup';
import CheckBoxGroup from './CheckboxGroup';
import RadioButtonsGroup from './RadioButtonsGroup';

const ColoredControls = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.check_form_controls.colored_controls')}</h5>
            <h5 className="subhead">Checkboxes and radio buttons. Use class
              <span className="red-text"> colored</span>
            </h5>
          </div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <form className="form form--preview" onSubmit={handleSubmit}>
                <SelectColorGroup name="colored" />
                <CheckBoxGroup name="button" className="colored" />
                <RadioButtonsGroup className="colored" />
              </form>
          )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

ColoredControls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ColoredControls;
