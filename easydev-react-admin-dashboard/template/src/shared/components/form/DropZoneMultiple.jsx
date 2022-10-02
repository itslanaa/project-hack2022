import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';

const DropZoneMultipleField = ({ name, value, onChange }) => {
  const files = value;
  const onDrop = (onDropFiles) => {
    onChange(onDropFiles.map(fl => Object.assign(fl, {
      preview: URL.createObjectURL(fl),
    })));
  };
  const removeFile = (index, e) => {
    e.preventDefault();
    onChange(value.filter((val, i) => i !== index));
  };

  return (
    <div className="dropzone dropzone--multiple">
      <Dropzone
        className="dropzone__input"
        accept="image/jpeg, image/png"
        name={name}
        onDrop={(filesToUpload) => {
          onDrop(value ? value.concat(filesToUpload) : filesToUpload);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone__input">
            {(!files || files.length === 0)
            && (
              <div className="dropzone__drop-here">
                <span className="lnr lnr-upload" /> Drop file here to upload
              </div>
            )}
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
      {files && Array.isArray(files)
      && (
        <div className="dropzone__imgs-wrapper">
          {files.map((file, i) => (
            <div className="dropzone__img" key={file.name} style={{ backgroundImage: `url(${file.preview})` }}>
              <p className="dropzone__img-name">{file.name}</p>
              <button className="dropzone__img-delete" type="button" onClick={e => removeFile(i, e)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

DropZoneMultipleField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      files: PropTypes.string,
    })),
  ]).isRequired,
};

export default renderComponentField(DropZoneMultipleField);
