import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Button, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import { ImageNotification } from '@/shared/components/Notification';

const image = `${process.env.PUBLIC_URL}/img/photo_notification.png`;

const show = (showNotification, position) => showNotification({
  notification(theme) {
    return (
      <ImageNotification
        title="Lora Simpson"
        img={image}
        message="Learning day desirous informed expenses material returned six the. She enabled …"
        theme={theme}
      />
    );
  },
  position,
});

const ImageNotifications = ({ showNotification }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xs={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.notifications.image_notifications')}</h5>
            <h5 className="subhead">Use ImageNotification with necessary value of properties
              <span className="red-text"> position</span> and <span className="red-text">img</span>
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

ImageNotifications.propTypes = {
  showNotification: PropTypes.func.isRequired,
};

export default ImageNotifications;
