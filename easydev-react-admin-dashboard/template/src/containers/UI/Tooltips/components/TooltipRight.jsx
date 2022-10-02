import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Button, ButtonToolbar, Card, CardBody, Col, UncontrolledTooltip,
} from 'reactstrap';

const TooltipRight = ({ dir }) => {
  const { t } = useTranslation('common');

  return (
    <Col sm={12} md={6} lg={6} xl={3} className="card-tooltip">
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.tooltips_popovers.tooltip_on_right')}</h5>
            <h5 className="subhead">Use default tooltip with placement <span className="red-text">right</span></h5>
          </div>
          <ButtonToolbar className="btn-toolbar--center">
            <Button id="TooltipRight" outline className="button-tooltip">
              Tooltip on Right
            </Button>
            <UncontrolledTooltip dir={dir} placement="right" target="TooltipRight">
              Do you like dragons?
            </UncontrolledTooltip>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

TooltipRight.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default TooltipRight;
