import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';

const SquareButtons = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.buttons.square_buttons')}</h5>
            <h5 className="subhead">Use default button with class <span className="red-text">square</span></h5>
          </div>
          <ButtonToolbar>
            <Button className="square" outline>Minimal</Button>
            <Button className="square">Secondary</Button>
            <Button disabled className="square">Disabled</Button>
            <Button color="primary" className="square">Primary</Button>
            <Button color="success" className="square">Success</Button>
            <Button color="warning" className="square">Warning</Button>
            <Button color="danger" className="square">Danger</Button>
            <Button color="primary" className="square" outline>Primary</Button>
            <Button color="success" className="square" outline>Success</Button>
            <Button color="warning" className="square" outline>Warning</Button>
            <Button color="danger" className="square" outline>Danger</Button>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SquareButtons;
