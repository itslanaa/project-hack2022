import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';

const PaginationComponent = ({ initialPage }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const setPage = (page) => {
    if (page < 1) {
      return;
    }
    setCurrentPage(page);
  };

  return (
    <div className="pagination__wrap pagination__wrap--small">
      <Pagination className="pagination" dir="ltr">
        <PaginationItem className="pagination__item" disabled={currentPage === 1}>
          <PaginationLink
            className="pagination__link pagination__link--arrow"
            type="button"
            onClick={() => setPage(currentPage - 1)}
          >
            <ChevronLeftIcon className="pagination__link-icon" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="pagination__item">
          <PaginationLink
            className="pagination__link pagination__link--arrow"
            type="button"
            onClick={() => setPage(currentPage + 1)}
          >
            <ChevronRightIcon className="pagination__link-icon" />
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
};

PaginationComponent.propTypes = {
  initialPage: PropTypes.number.isRequired,
};

export default PaginationComponent;
