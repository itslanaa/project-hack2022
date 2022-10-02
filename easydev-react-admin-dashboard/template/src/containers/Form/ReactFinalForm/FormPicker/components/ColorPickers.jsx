import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Card, CardBody, Col } from 'reactstrap';
import renderBlockColorPickerField from '@/shared/components/form/BlockColorPicker';
import renderSketchColorPickerField from '@/shared/components/form/SketchColorPicker';
import renderChromeColorPickerField from '@/shared/components/form/ChromeColorPicker';

const ColorPickers = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.from_picker.color_picker')}</h5>
          </div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <form className="form form--justify form--color-picker" onSubmit={handleSubmit}>
                <div className="form__form-group">
                  <span className="form__form-group-label">Sketch Color Picker</span>
                  <div className="form__form-group-field">
                    <Field
                      name="sketch_color"
                      component={renderSketchColorPickerField}
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Block Color Picker</span>
                  <div className="form__form-group-field">
                    <Field
                      name="block_color"
                      component={renderBlockColorPickerField}
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Chrome Color Picker</span>
                  <div className="form__form-group-field">
                    <Field
                      name="chrome_color"
                      component={renderChromeColorPickerField}
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

ColorPickers.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ColorPickers;
