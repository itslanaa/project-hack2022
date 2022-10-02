/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot';
import classNames from 'classnames';
import CheckIcon from 'mdi-react/CheckIcon';
import PaperclipIcon from 'mdi-react/PaperclipIcon';
import StarIcon from 'mdi-react/StarIcon';
import { EmailProps } from '@/shared/prop-types/EmailProps';

const EmailListItem = ({
  email, onLetter, itemId, isChecked,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCheckedMail, setCheckedMail] = useState(isChecked);
  const itemClass = classNames({
    'inbox__email-list-item': true,
    'inbox__email-list-item--unread': email.unread,
  });

  const onFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const onChangeSelect = () => {
    setCheckedMail(!isCheckedMail);
  };

  return (
    <tr className={itemClass}>
      <td>
        <label htmlFor={itemId} className="checkbox-btn checkbox-btn--colored-click inbox__email-list-item-checkbox">
          <input
            id={itemId}
            className="checkbox-btn__checkbox"
            type="checkbox"
            checked={isCheckedMail}
            onChange={onChangeSelect}
          />
          <span className="checkbox-btn__checkbox-custom">
            <CheckIcon />
          </span>
        </label>
      </td>
      <td onClick={onFavorite}>
        <StarIcon className={`inbox__favorite${isFavorite ? ' active' : ''}`} />
      </td>
      <td className="inbox__email-table-name" onClick={onLetter}>{email.name}</td>
      <td onClick={onLetter} className="inbox__email-table-preview">
        <Dotdotdot clamp={1}><b>{email.subject}</b> {email.preview}</Dotdotdot>
      </td>
      <td onClick={onLetter}>{email.attach ? <PaperclipIcon /> : ''}</td>
      <td onClick={onLetter} className="inbox__email-table-date">{email.time}</td>
    </tr>
  );
};

EmailListItem.propTypes = {
  email: EmailProps.isRequired,
  onLetter: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default EmailListItem;
