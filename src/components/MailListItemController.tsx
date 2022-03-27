import React from 'react';
import { useSelector } from 'react-redux';
import { selectMail } from '../store/selectors/mailSelectors';
import MailListItem from './MailListItem';

interface MailListItemControllerProps {
  id: Mail['id'];
}

const MailListItemController: React.FC<MailListItemControllerProps> = ({ id }) => {
  const mail = useSelector(selectMail(id));

  return (
    <MailListItem mail={mail} />
  );
};

export default React.memo(MailListItemController);
