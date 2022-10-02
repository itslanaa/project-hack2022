import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Button, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import { BasicNotification } from '@/shared/components/Notification';

const show = (showNotification, position) => showNotification({
  notification(theme) {
    return (
      <BasicNotification
        title="Remember!"
        message="Learning day desirous informed expenses material returned six the.
      She enabled invited exposed him another."
        theme={theme}
      />
    );
  },
  position,
});

const BasicNotifications = ({ showNotification }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xs={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.notifications.basic_notifications')}</h5>
            <h5 className="subhead">Use BasicNotification with necessary value of property
              <span className="red-text"> position</span>
            </h5>
          </div>
          <ButtonToolbar>
            <Button outline onClick={() => show(showNotification, 'left-up')}>Left Up</Button>
            <Button outline onClick={() => show(showNotification, 'right-up')}>Right Up</Button>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

BasicNotifications.propTypes = {
  showNotification: PropTypes.func.isRequired,
};

export default BasicNotifications;
