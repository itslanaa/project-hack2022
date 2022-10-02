import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ProductsListTable from './components/ProductsListTable';
import CreateTableData from './components/CreateData';

const ProductsList = () => {
  const productListTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Products List</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <ProductsListTable productListTableData={productListTableData} />
      </Row>
    </Container>
  );
};

export default ProductsList;
