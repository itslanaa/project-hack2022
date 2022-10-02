import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ContactProps } from '@/shared/prop-types/ChatProps';

const contactClass = active => classNames({
  chat__contact: true,
  'chat__contact--active': active,
});

const ChatUser = ({ contact, active }) => {
  let lastMessage = '';
  if (contact.messages.length) {
    lastMessage = contact.messages.slice(-1)[0].message;
  } else {
    lastMessage = 'new contact';
  }

  return (
    <div className={contactClass(active)}>
      <div className="chat__contact-avatar">
        <img src={contact.avatar} alt="ava" />
      </div>
      <div className="chat__contact-preview">
        <p className="chat__contact-name">{contact.name}</p>
        <p className="chat__contact-post">{contact.post}</p>
        <p className="chat__contact-last-message">{lastMessage}</p>
      </div>
    </div>
  );
};

ChatUser.propTypes = {
  contact: ContactProps.isRequired,
  active: PropTypes.bool,
};

ChatUser.defaultProps = {
  active: false,
};

export default ChatUser;
