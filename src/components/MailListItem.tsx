import React, { useCallback } from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Checkbox from './Checkbox';
import { mailSlice } from '../store/slices/mailSlice';

export interface MailListItemProps {
  mail: Mail;
}

const MailListItem: React.FC<MailListItemProps> = ({ mail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheck = useCallback(() => {
    dispatch(mailSlice.actions.switchRead(mail.id));
  }, [mail]);

  const handleOpenDetails = useCallback(() => {
    navigate(`/${mail.id}`);
  }, [mail]);

  return (
    <div
      className={clsx(
        'flex flex-1 mb-4 h-16 cursor-pointer',
        mail.isUnread && 'font-bold',
      )}
    >
      <div className="pr-4">
        <Checkbox checked={!mail.isUnread} onCheck={handleCheck} />
      </div>
      <div
        className="flex flex-1 grow-[1]"
        onClick={handleOpenDetails}
      >
        <div className="pr-4 flex flex-1 grow-[1]">
          <span className="text-md leading-6">
            {mail.from}
          </span>
        </div>
        <div className="pr-4 flex flex-1 grow-[4]">
          <div className="flex flex-col overflow-hidden">
            <span className="text-md leading-6 overflow-hidden text-ellipsis">{mail.subject}</span>
            <span className="text-md leading-6 text-gray-500 overflow-hidden text-ellipsis">{mail.snippet}</span>
          </div>
        </div>
        <div className="text-gray-500">
          <span>{mail.sentDate}</span>
        </div>
      </div>
    </div>

  );
};

export default React.memo(MailListItem);
