import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMail } from '../store/selectors/mailSelectors';
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';

const MailDetailsPage = () => {
  const { mailId } = useParams<{ mailId: string }>();
  const navigate = useNavigate();

  const mail = useSelector(selectMail(+(mailId ?? 0)));

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  if (!mailId || !mail) {
    navigate('/');
    return null;
  }

  return (
    <PageContainer>
      <div>
        <Button onClick={handleBack}>Powrót</Button>
      </div>
      <div className="flex flex-row flex-1 place-content-between">
        <p className="font-bold">{mail.from}</p>
        <p className="text-sm text-gray-500">{mail.sentDate}</p>
      </div>
      <p className="text-lg">{mail.subject}</p>
      <p>{mail.snippet}</p>
      <p className="text-xs">{`ID: ${mail.id}`}</p>
    </PageContainer>
  );
};

export default MailDetailsPage;
