import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'reactstrap';
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';
import StarIcon from 'mdi-react/StarIcon';
import ReplyIcon from 'mdi-react/ReplyIcon';
import DeleteIcon from 'mdi-react/DeleteIcon';
import PrinterIcon from 'mdi-react/PrinterIcon';
import PaperclipIcon from 'mdi-react/PaperclipIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import { EmailBodyProps } from '@/shared/prop-types/EmailProps';

const Email = ({ email, onReply, onBack }) => {
  const [isQuickReplied, setIsQuickReplied] = useState(false);

  const onQuickReply = () => {
    setIsQuickReplied(true);
  };

  const onQuickReplyClose = () => {
    setIsQuickReplied(false);
  };

  return (
    <div className="inbox__email inbox__content">
      <div className="inbox__email-header">
        <div className="inbox__email-left">
          <button
            className="inbox__email-back"
            type="button"
            aria-label="email back button"
            onClick={onBack}
          >
            <ArrowLeftIcon />
          </button>
          <div className="inbox__email-ava">
            <img src={email.ava} alt="" />
          </div>
          <div className="inbox__email-info">
            <h5 className="inbox__email-name">{email.name}
              <StarIcon className={`inbox__favorite${email.favorite ? ' active' : ''}`} />
            </h5>
            <p className="inbox__email-email">{email.email}</p>
          </div>
        </div>
        <div className="inbox__email-right">
          <p className="inbox__email-time">{email.time}</p>
          <button
            className="inbox__email-btn"
            type="button"
            aria-label="email reply button"
            onClick={onReply}
          >
            <ReplyIcon />
          </button>
          <button
            className="inbox__email-btn"
            type="button"
            aria-label="email delete button"
          >
            <DeleteIcon />
          </button>
          <button
            className="inbox__email-btn"
            type="button"
            aria-label="email printer button"
          >
            <PrinterIcon />
          </button>
        </div>
      </div>
      <div className="inbox__email-body">
        {email.body}
      </div>
      {email.attachment
        ? (
          <div className="inbox__email-attachment">
            <h5 className="inbox__email-attachment-title" dir="ltr">Attachment (2 file 12Mb):</h5>
            {email.attachment.map(item => (
              <div key={`index_${item.name}_${item.time}`} className="inbox__email-attachment-link">
                <PaperclipIcon /><a href={item.link} download dir="ltr">{item.name} ({item.size})</a>
              </div>
            ))}
          </div>
        ) : ''}
      <div className="inbox__email-reply">
        <textarea className="inbox__email-reply-textarea" onFocus={onQuickReply} />
        {!isQuickReplied
          ? <p className="inbox__email-reply-placeholder">Click here to <span>reply</span></p>
          : (
            <div>
              <button className="inbox__email-reply-close" type="button" onClick={onQuickReplyClose}>
                <CloseIcon />
              </button>
              <ButtonToolbar className="inbox__email-reply-btns">
                <Button size="sm" color="primary">Send</Button>
                <button className="inbox__email-reply-btn-full" type="button" onClick={onReply}>
                  Go to full answer form
                </button>
              </ButtonToolbar>
            </div>
          )}
      </div>
    </div>
  );
};

Email.propTypes = {
  email: EmailBodyProps.isRequired,
  onReply: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Email;
