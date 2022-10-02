import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '@/shared/components/CodeHighlither';

const Material = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Material</h5>
      </div>
      <p>You can combine react-final-form with material-ui. Material UI documentation can be found
        <a href="https://mui.com/"> here</a>. This is an example of using a TextField:
      </p>
      <CodeHighlither>
        {`import TextField from '@material-ui/core/TextField';

const renderTextField = ({input, label, meta: {touched, error}, children, select}) => (
  <TextField
    className="material-form__field"
    label={label}
    error={touched && !!error}
    value={input.value}
    type={input.type}
    select={select}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  >
    {children}
  </TextField>
);`}
      </CodeHighlither>
      <p>Stylesheet: <b>template/src/scss/component/material-form.scss</b></p>
    </CardBody>
  </Card>
);

export default Material;
