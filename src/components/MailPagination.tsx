import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { selectAllMailsCount, selectMailsIds } from '../store/selectors/mailSelectors';
import MailList from './MailList';

interface MailPaginationProps {
  page: number;
}

const perPage = 10;

const MailPagination: React.FC<MailPaginationProps> = ({ page }) => {
  const allMailsCount = useSelector(selectAllMailsCount);
  const mailsIds = useSelector(selectMailsIds(page, perPage));

  const navigate = useNavigate();

  const handleNewPage = useCallback(({ selected }) => {
    navigate(`/?page=${selected + 1}`);
  }, [navigate]);

  return (
    <div>
      <MailList mailsIds={mailsIds} />
      <div className="flex flex-row justify-center pb-8">
        <ReactPaginate
          forcePage={page - 1}
          breakLabel="..."
          nextLabel="następna >"
          onPageChange={handleNewPage}
          pageRangeDisplayed={5}
          pageCount={Math.floor(allMailsCount / perPage)}
          previousLabel="< poprzednia"
          className="flex flex-row gap-2"
          activeLinkClassName="bg-yellow-300 rounded"
          pageLinkClassName="border-2 border-yellow-300 rounded p-2"
          previousLinkClassName="border-2 border-yellow-300 rounded p-2"
          nextLinkClassName="border-2 border-yellow-300 rounded p-2"
        />
      </div>

    </div>
  );
};

export default MailPagination;
