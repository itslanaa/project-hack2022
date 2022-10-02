import React, { useState } from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import classNames from 'classnames';
import { CurrentUserProps, ContactsProps } from '@/shared/prop-types/ChatProps';
import ChatContact from './ChatContact';
import ChatBubble from './ChatBubble';
import ChatSearch from './ChatSearch';
import ChatField from './ChatField';
import ChatTopbar from './ChatTopbar';

const Chat = ({ currentUser, contacts }) => {
  const [currentMessages, setCurrentMessages] = useState(contacts[0].messages);
  const [currentChat, setCurrentChat] = useState(contacts[0].userName);
  const [openContacts, setOpenContacts] = useState(false);

  const chatClass = classNames({
    chat: true,
    'chat--open': openContacts,
  });

  const contactsClass = classNames({
    'chat__contact-list': true,
    'chat__contact-list--open': openContacts,
  });

  const onOpenChat = (contact) => {
    const dialog = contacts.find(c => c.userName === contact).messages;
    const messages = dialog || null;
    setCurrentChat(contact);
    setCurrentMessages(messages);
  };

  const onOpenContacts = () => {
    setOpenContacts(!openContacts);
  };
  return (
    <div
      className={chatClass}
      onClick={openContacts ? onOpenContacts : null}
      role="presentation"
    >
      <div className={contactsClass}>
        <ChatSearch />
        <div className="chat__contacts">
          <Scrollbar className="scroll chat__contacts-scroll" alwaysShowTracks>
            {contacts.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={e => onOpenChat(item.userName, e)}
              >
                <ChatContact active={item.userName === currentChat} contact={item} />
              </button>
            ))}
          </Scrollbar>
        </div>
      </div>
      {currentChat === null
        ? (
          <div className="chat__dialog">
            <ChatTopbar onClick={onOpenContacts} />
            <div className="chat__dialog-select-message">
              <p>Select a chat to start messaging</p>
            </div>
          </div>
        ) : (
          <div className="chat__dialog">
            <ChatTopbar
              contact={contacts.find(item => item.userName === currentChat)}
              onClick={onOpenContacts}
            />
            <Scrollbar className="scroll chat__scroll" alwaysShowTracks>
              <div className="chat__dialog-messages-wrap">
                {currentMessages === null || currentMessages.length === 0
                  ? (
                    <div className="chat__dialog-messages">
                      <div className="chat__dialog-messages-empty">
                        <p>No messages</p>
                      </div>
                    </div>
                  ) : (
                    <div className="chat__dialog-messages">
                      {currentMessages.map(item => (
                        <ChatBubble
                          key={item.id}
                          contact={item.userName === currentUser.userName ? currentUser
                            : contacts.find(c => c.userName === item.userName)}
                          message={item}
                          date={item}
                          active={item.userName === currentUser.userName}
                        />
                      ))}
                    </div>
                  )}
              </div>
            </Scrollbar>
            <ChatField />
          </div>
        )}
    </div>
  );
};

Chat.propTypes = {
  currentUser: CurrentUserProps.isRequired,
  contacts: ContactsProps.isRequired,
};

export default Chat;
