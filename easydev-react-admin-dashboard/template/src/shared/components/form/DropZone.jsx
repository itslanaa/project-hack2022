import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';

const DropZoneField = ({
  value, customHeight, name, onChange,
}) => {
  const files = value;
  const onDrop = (file) => {
    onChange(file.map(fl => Object.assign(fl, {
      preview: URL.createObjectURL(fl),
    })));
  };
  const removeFile = (index, e) => {
    e.preventDefault();
    onChange(value.filter((val, i) => i !== index));
  };

  return (
    <div className={`dropzone dropzone--single${customHeight ? ' dropzone--custom-height' : ''}`}>
      <Dropzone
        accept="image/jpeg, image/png"
        name={name}
        multiple={false}
        onDrop={(fileToUpload) => {
          onDrop(fileToUpload);
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
      {files && Array.isArray(files) && files.length > 0
      && (
        <aside className="dropzone__img">
          <img src={files[0].preview} alt="drop-img" />
          <p className="dropzone__img-name">{files[0].name}</p>
          <button className="dropzone__img-delete" type="button" onClick={e => removeFile(0, e)}>
            Remove
          </button>
        </aside>
      )}
    </div>
  );
};

DropZoneField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  customHeight: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
  ]).isRequired,
};

DropZoneField.defaultProps = {
  customHeight: false,
};

export default renderComponentField(DropZoneField);
