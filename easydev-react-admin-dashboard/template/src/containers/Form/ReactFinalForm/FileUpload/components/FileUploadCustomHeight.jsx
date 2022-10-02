import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import renderDropZoneField from '@/shared/components/form/DropZone';

const FileUploadCustomHeight = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.file_upload.file_upload_custom_height')}</h5>
            <h5 className="subhead">For files upload, use property
              <span className="red-text"> customHeight</span>
            </h5>
          </div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <form className="form" onSubmit={handleSubmit}>
                <Field
                  name="files"
                  component={renderDropZoneField}
                  customHeight
                />
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

FileUploadCustomHeight.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FileUploadCustomHeight;
