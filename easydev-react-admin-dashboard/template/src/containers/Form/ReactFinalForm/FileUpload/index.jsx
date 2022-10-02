import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import showResults from '@/utils/showResults';
import FileUploadDefault from './components/FileUploadDefault';
import FileUploadCustomHeight from './components/FileUploadCustomHeight';

const FileUpload = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('forms.file_upload.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <FileUploadDefault onSubmit={showResults} />
        <FileUploadCustomHeight onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default FileUpload;
