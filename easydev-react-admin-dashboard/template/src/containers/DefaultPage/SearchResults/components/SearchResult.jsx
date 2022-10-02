import React from 'react';
import PropTypes from 'prop-types';

const SearchResult = ({ title, link, preview }) => (
  <div className="search-result">
    <p className="search-result__title">{title}</p>
    <p className="search-result__link"><a href={link}>{link}</a></p>
    <p className="search-result__preview">{preview}</p>
  </div>
);

SearchResult.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  preview: PropTypes.string,
};

SearchResult.defaultProps = {
  title: '',
  link: '',
  preview: '',
};

export default SearchResult;
