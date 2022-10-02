import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { deleteNewOrderTableData } from '@/redux/actions/newOrderTableActions';
import { NewOrderTableProps } from '@/shared/prop-types/TablesProps';
import { RTLProps } from '@/shared/prop-types/ReducerProps';
import TotalProducts from './components/TotalProducts';
import TotalProfit from './components/TotalProfit';
import OrdersToday from './components/OrdersToday';
import Subscriptions from './components/Subscriptions';
import TopSellingProducts from './components/TopSellingProducts';
import BasicCard from './components/BasicCard';
import SalesStatistic from './components/SalesStatistic';
import RecentOrders from './components/RecentOrders';
import ProductSales from './components/ProductSales';
import NewOrders from './components/NewOrders';
import SalesStatisticBar from './components/SalesStatisticBar';
import MyTodos from './components/MyTodos';
import Emails from './components/Emails';
import SalesReport from './components/SalesReport';
import ShortReminders from './components/ShortReminders';
import { editTodoElement, fetchTodoListData } from '../../Todo/redux/actions';
import todoCard from '../../Todo/types';

const onDeleteRow = (dispatch, newOrder) => (index) => {
  const arrayCopy = [...newOrder];
  arrayCopy.splice(index, 1);
  dispatch(deleteNewOrderTableData(arrayCopy));
};

const ECommerceDashboard = ({
  newOrder, todoElements, rtl, editTodoElementAction, fetchTodoListDataAction,
}) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    if (todoElements.length === 0) { // You can delete it if you need
      fetchTodoListDataAction();
    }
  }, [fetchTodoListDataAction, todoElements.length]);

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('dashboard_commerce.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <TotalProducts />
        <TotalProfit />
        <OrdersToday />
        <Subscriptions />
      </Row>
      <Row>
        <ProductSales rtl={rtl.direction} />
        <BasicCard />
        <SalesStatistic />
        <MyTodos
          todoElements={todoElements}
          editTodoElement={editTodoElementAction}
        />
        <SalesStatisticBar />
        <SalesReport />
        <Emails />
        <ShortReminders />
        <TopSellingProducts dir={rtl.direction} />
        <NewOrders newOrder={newOrder} onDeleteRow={onDeleteRow(editTodoElementAction, newOrder)} />
        <RecentOrders />
      </Row>
    </Container>
  );
};

ECommerceDashboard.propTypes = {
  newOrder: NewOrderTableProps.isRequired,
  todoElements: PropTypes.arrayOf(todoCard).isRequired,
  fetchTodoListDataAction: PropTypes.func.isRequired,
  editTodoElementAction: PropTypes.func.isRequired,
  rtl: RTLProps.isRequired,

};

const mapStateToProps = (state) => {
  const todoElements = state.todo && state.todo.data && state.todo.data.elements
  && state.todo.data.elements.length > 0 ? [...state.todo.data.elements] : [];
  return ({
    newOrder: state.newOrder.items,
    todoElements,
    rtl: state.rtl,
  });
};

const mapDispatchToProps = {
  fetchTodoListDataAction: fetchTodoListData,
  editTodoElementAction: editTodoElement,
};

export default connect(mapStateToProps, mapDispatchToProps)(ECommerceDashboard);
