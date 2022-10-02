import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PropTypes from 'prop-types';

const CodeHighlither = ({ scss, children }) => (
  <SyntaxHighlighter showLineNumbers language={scss ? 'scss' : 'jsx'} style={darcula}>
    {children}
  </SyntaxHighlighter>
);

export default CodeHighlither;

CodeHighlither.propTypes = {
  scss: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

CodeHighlither.defaultProps = {
  scss: false,
};
