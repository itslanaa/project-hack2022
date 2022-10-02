import React, { memo, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import PropTypes from 'prop-types';

const ToolbarOptions = {
  options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'emoji', 'image', 'history'],
  inline: {
    options: ['bold', 'italic', 'underline'],
  },
};

const TextEditorTwo = memo(({ onChange }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (items) => {
    setEditorState(items);
    if (onChange) { onChange(draftToHtml(convertToRaw(items.getCurrentContent()))); }
  };

  return (
    <div className="text-editor">
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbar={ToolbarOptions}
      />
    </div>
  );
});

TextEditorTwo.propTypes = {
  onChange: PropTypes.func,
};

TextEditorTwo.defaultProps = {
  onChange: () => {},
};

export default TextEditorTwo;
