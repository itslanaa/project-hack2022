import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-final-form';
import { Card, CardBody, Col } from 'reactstrap';
import SelectColorGroup from './SelectColorGroup';
import CheckBoxGroup from './CheckboxGroup';
import RadioButtonsGroup from './RadioButtonsGroup';

const DefaultControls = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.check_form_controls.default_controls')}</h5>
            <h5 className="subhead">Checkboxes and radio buttons</h5>
          </div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <form className="form form--preview" onSubmit={handleSubmit}>
                <SelectColorGroup />
                <CheckBoxGroup />
                <RadioButtonsGroup />
              </form>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

DefaultControls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DefaultControls;
