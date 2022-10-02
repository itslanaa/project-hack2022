import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '@/shared/components/CodeHighlither';

const Notifications = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Notifications</h5>
      </div>
      <p>
        Notifications are based on
        <a href="https://github.com/react-component/notification">
          rc-notification
        </a>.
        Example of using this component here:
      </p>
      <CodeHighlither>
        {`import React from 'react';
import PropTypes from 'prop-types';
import { BasicNotification } from '../../../../components/Notification';

const BasicNotifications = ({ showNotification }) => {
  const show = (position) => {
    showNotification({
      notification: <BasicNotification title='Remember!'
                       message='Learning day desirous informed expenses material returned six the.
                       She enabled invited exposed him another.'
        />,
      position: position
      });
  };

  return (
    <Button outline onClick={() => show('left-up')}>Left Up</Button>
  )
};

BasicNotifications.propTypes = {
  showNotification: PropTypes.func.isRequired,
};

export default BasicNotifications;
`}
      </CodeHighlither>
      <p>Stylesheet: <b>template/src/scss/components/notification.scss</b></p>
    </CardBody>
  </Card>
);

export default Notifications;
