import React, { useState } from 'react';
import { Button } from 'reactstrap';
import PenIcon from 'mdi-react/PenIcon';
import InboxArrowDownIcon from 'mdi-react/InboxArrowDownIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import TooltipEditIcon from 'mdi-react/TooltipEditIcon';
import StarIcon from 'mdi-react/StarIcon';
import DeleteIcon from 'mdi-react/DeleteIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import { EmailsProps } from '@/shared/prop-types/EmailProps';
import showResults from '@/utils/showResults';
import MailBox from './MailBox';
import ComposeEmail from './ComposeEmail';
import Email from './Email';
import InboxTable from './InboxTable';

const mailboxes = [
  { icon: <InboxArrowDownIcon />, title: 'Inbox', amount: 21 },
  { icon: <EmailIcon />, title: 'Sent Mail' },
  { icon: <TooltipEditIcon />, title: 'Drafts', amount: 2 },
  { icon: <StarIcon />, title: 'Tagged' },
  { icon: <DeleteIcon />, title: 'Deleted' },
];

const labels = [
  { color: 'green', title: 'Freelance' },
  { color: 'red', title: 'Work' },
  { color: 'blue', title: 'Travel' },
  { color: 'yellow', title: 'Clients' },
];

const emailExample = [{
  ava: `${process.env.PUBLIC_URL}/img/24_mail_ava.png`,
  name: 'Nikolay Morris',
  email: 'mailexample@mail.com',
  favorite: true,
  time: 'July 12 11:30 PM',
  body:
  <div className="typography-message">
    <h4><b>Congratulations! You are win! </b></h4>
    <p>Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression for.
      His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved as oh he
      unpleasant no inquietude insipidity. Advantages can discretion possession add favourable cultivated
      admiration far. Why rather assure how esteem end hunted nearer and before. By an truth after heard going
      early given he. Charmed to it excited females whether at examine. Him abilities suffering may are yet
      dependent. Barton did feebly change man she afford square add. Want eyes by neat so just must. Past
      draw tall up face show rent oh mr.
    </p>
    <p>Best regards,</p>
    <p>Nikolay</p>
  </div>,
  attachment: [
    { name: 'Project Design.psd', size: '11Mb', link: './fav.ico' },
    { name: 'Report.txt', size: '1Mb', link: './fav.ico' },
  ],
}];

const Inbox = ({ emails }) => {
  const [isComposed, setIsComposed] = useState(false);
  const [email, setEmail] = useState(false);
  const [mailbox, setMailbox] = useState(0);
  const [label, setLabel] = useState(0);
  const [isOpenedMailboxes, setIsOpenedMailboxes] = useState(false);

  const mailboxesWithID = mailboxes.map((item, index) => ({ ...item, id: index }));
  const labelsWithID = labels.map((item, index) => ({ ...item, id: index }));

  const onCompose = () => {
    setIsComposed(true);
    setEmail(false);
  };

  const onMailBox = (index) => {
    setMailbox(index);
    setIsComposed(false);
    setEmail(false);
  };

  const onLabel = (index) => {
    setLabel(index);
    setIsComposed(false);
    setEmail(false);
  };

  const onLetter = () => {
    setEmail(true);
  };

  const onOpenMailboxes = () => {
    setIsOpenedMailboxes(!isOpenedMailboxes);
  };

  return (
    <div
      className={`inbox${isOpenedMailboxes ? ' inbox--show-mailboxes' : ''}`}
      onClick={isOpenedMailboxes ? onOpenMailboxes : null}
      role="presentation"
    >
      <div className="inbox__mailbox-list">
        <Button
          color="primary"
          className="icon inbox__mailbox-list-btn"
          size="sm"
          onClick={onCompose}
        >
          <PenIcon />Compose
        </Button>
        {mailboxesWithID.map((item, index) => (
          <button
            type="button"
            className="inbox__list-button"
            key={item.id}
            onClick={() => onMailBox(index)}
          >
            <MailBox title={item.title} amount={item.amount} selected={index === mailbox}>
              {item.icon}
            </MailBox>
          </button>
        ))}
        <p className="inbox__labels">Labels</p>
        {labelsWithID.map((item, index) => (
          <button
            type="button"
            key={item.id}
            onClick={() => onLabel(index)}
            className={`inbox__list-button inbox__label${label === index ? ' active' : ''}`}
          >
            <span className={`inbox__label-color inbox__label-color--${item.color}`} />{item.title}
          </button>
        ))}
      </div>
      <div className="inbox__container">
        <div className={`inbox__topbar${email ? ' inbox__topbar--hide' : ''}`}>
          <button className="inbox__topbar-button" type="button" onClick={onOpenMailboxes}>
            <MenuIcon className="inbox__topbar-button-icon" />
          </button>
        </div>
        {!isComposed
          ? (
            <div>
              {email
                ? (
                  <Email
                    email={emailExample[0]}
                    onReply={onCompose}
                    onSubmit
                    onBack={() => onMailBox(mailbox)}
                  />
                )
                : <InboxTable emails={emails} onLetter={onLetter} />}
            </div>
          )
          : <ComposeEmail onSubmit={showResults} />}
      </div>
    </div>
  );
};

Inbox.propTypes = {
  emails: EmailsProps.isRequired,
};

export default Inbox;
