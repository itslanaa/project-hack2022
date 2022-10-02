import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { EmailsProps } from '@/shared/prop-types/EmailProps';
import EmailListItem from './EmailListItem';
import EmailsControls from './EmailsControls';

const InboxTable = ({ emails, onLetter }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [pageOfItems, setPageOfItems] = useState(null);
  const [emailsWithID, setEmailsWithID] = useState([]);

  useEffect(() => {
    setEmailsWithID(emails.map((item, index) => ({ ...item, id: index })));
  }, [emails]);

  const onChangePage = (page) => {
    setPageOfItems(page);
  };

  const onChangeSelect = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="inbox__content">
      <EmailsControls
        emails={emails}
        onChangePage={onChangePage}
        onChangeSelect={onChangeSelect}
        pageOfItems={pageOfItems}
      />
      <Table className="table--bordered inbox__emails-table" responsive>
        <tbody>
          {emailsWithID.slice(1, 15).map((item, index) => (
            <EmailListItem
              key={item.id}
              email={item}
              itemId={index}
              onLetter={onLetter}
              isChecked={isChecked}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

InboxTable.propTypes = {
  emails: EmailsProps.isRequired,
  onLetter: PropTypes.func.isRequired,
};

export default InboxTable;
