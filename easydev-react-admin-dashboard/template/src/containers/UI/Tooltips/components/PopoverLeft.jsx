import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  ButtonToolbar, Card, CardBody, Col, Button, Popover, PopoverBody, PopoverHeader,
} from 'reactstrap';

const PopoverLeft = ({ dir }) => {
  const { t } = useTranslation('common');
  const [IsOpenedPopover, setIsOpenedPopover] = useState(false);

  const handleOpenPopover = () => {
    setIsOpenedPopover(!IsOpenedPopover);
  };

  return (
    <Col sm={12} md={6} lg={6} xl={3} className="card-tooltip">
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.tooltips_popovers.popover_on_left')}</h5>
            <h5 className="subhead">Use popover with placement <span className="red-text">left</span></h5>
          </div>
          <ButtonToolbar className="btn-toolbar--center">
            <Button id="PopoverLeft" onClick={handleOpenPopover} outline className="button-tooltip">
              Popover on Left
            </Button>
            <Popover
              placement="left"
              isOpen={IsOpenedPopover}
              target="PopoverLeft"
              toggle={handleOpenPopover}
              dir={dir}
            >
              <PopoverHeader>Popover on Left</PopoverHeader>
              <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem
                lacinia quam venenatis vestibulum.
              </PopoverBody>
            </Popover>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

PopoverLeft.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default PopoverLeft;
