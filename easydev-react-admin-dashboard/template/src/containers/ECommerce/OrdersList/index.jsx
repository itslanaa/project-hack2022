import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import OrdersListTable from './components/OrdersListTable';
import CreateTableData from './components/CreateData';

const OrdersList = () => {
  const orderListTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Orders List</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <OrdersListTable orderListTableData={orderListTableData} />
      </Row>
    </Container>
  );
};

export default OrdersList;
