import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import DnDTable from './components/DnDReactTable';
import CreateTableData from '../CreateData';

const DragAndDropTable = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('tables.dnd_table.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <DnDTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default DragAndDropTable;
