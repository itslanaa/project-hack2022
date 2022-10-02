import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '@/shared/components/CodeHighlither';

const ReactFinalForm = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">React Final Form</h5>
      </div>
      <p>This template contains examples of <a href="https://final-form.org/react">react final form</a> in
        <b> template/src/containers/Form/</b>.
      </p>
      <p>Stylesheet: <b>template/src/scss/component/form.scss</b></p>
      <p>The code of a basic form is below:</p>
      <CodeHighlither>
        {`import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, Form } from 'react-final-form';

const Example = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, form }) => (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__form-group">
          <label className="form__form-group-label">Input Label</label>
          <div className="form__form-group-field">
            <Field
              name="input"
              component="input"
              type="text"
              placeholder="..."
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
);

Example.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Example;`}
      </CodeHighlither>
      <p>You can add custom inputs with the following code:</p>
      <CodeHighlither>
        {`const renderField = ({ input, label, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)`}
      </CodeHighlither>
      <p>And then use your custom input inside Field:</p>
      <CodeHighlither>
        {`<Field
  name='input'
  type='text'
  component={renderField}
  label='Input Label'
/>`}
      </CodeHighlither>
      <p>All documentation about react-final-form you can read <a href="https://final-form.org/react">here</a>.</p>
    </CardBody>
  </Card>
);

export default ReactFinalForm;
