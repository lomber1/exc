import React from 'react';
import { useSelector } from 'react-redux';
import MailPagination from '../components/MailPagination';
import { selectReadMailsCount } from '../store/selectors/mailSelectors';
import useQuery from '../hooks/getQuery';
import PageContainer from '../components/PageContainer';

const MailsPage = () => {
  const readCount = useSelector(selectReadMailsCount);

  const query = useQuery();
  const page = +(query.get('page') ?? '1');

  return (
    <PageContainer>
      <p className="text-lg">{`Przeczytano: ${readCount} maili`}</p>
      <MailPagination page={page} />
    </PageContainer>
  );
};
export default MailsPage;
