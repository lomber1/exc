import React from 'react';
import MailListItemController from './MailListItemController';

export interface MailListProps {
  mailsIds: Mail['id'][];
}

const MailList: React.FC<MailListProps> = ({ mailsIds }) => (
  <div className="p-4">
    {mailsIds.map((mailId) => (
      <MailListItemController id={mailId} key={`mail-item-${mailId}`} />
    ))}
  </div>
);

export default React.memo(MailList);
