import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { ThemeProps } from '@/shared/prop-types/ReducerProps';
import {
  fetchTodoListData,
  editTodoElement,
  deleteTodoElement, addTodoElement,
} from './redux/actions';
import ItemEditModal from './components/form/ItemEditModal';
import TodoListWrapper from './components/TodoList';
import TodoSidebar from './components/TodoSidebar';
import todoCard from './types';

const DividerLine = ({ title }) => (
  <Col md={12}>
    <div className="todo-app__divider">
      <div className="todo-app__divider-line" />
      <p className="todo-app__divider-title">{title}</p>
      <div className="todo-app__divider-line" />
    </div>
  </Col>
);

DividerLine.propTypes = {
  title: PropTypes.string.isRequired,
};

const Todo = ({
  theme, rtl,
  todoElements,
  addTodoElementAction, editTodoElementAction, fetchTodoListDataAction, deleteTodoElementAction,
  isFetching,
}) => {
  const { t } = useTranslation('common');
  const [incompleteTodoElements, setIncompleteTodoElements] = useState(null);
  const [completedTodoElements, setCompletedTodoElements] = useState(null);
  const [archivedTodoElements, setArchivedTodoElements] = useState(null);
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [filterByPriority, setFilterByPriority] = useState('');
  const [prevTodoElements, setPrevTodoElements] = useState(null);

  useEffect(() => {
    if (JSON.stringify(todoElements) !== JSON.stringify(prevTodoElements)) {
      if (todoElements.length === 0 && prevTodoElements === null) { // You can delete it if you need
        fetchTodoListDataAction();
      }
      const filteredData = [...todoElements];
      let activeTodoElements = filteredData.filter(item => !item.data.isArchived);

      if (filterByPriority !== '') {
        activeTodoElements = activeTodoElements.filter(item => item.data.priority === filterByPriority);
      }
      setIncompleteTodoElements(activeTodoElements.filter(item => !item.data.isCompleted));
      setCompletedTodoElements(activeTodoElements.filter(item => item.data.isCompleted));
      setArchivedTodoElements(filteredData.filter(item => item.data.isArchived));
      setPrevTodoElements([...todoElements]);
    }
  }, [prevTodoElements, fetchTodoListDataAction, todoElements, filterByPriority]);

  const changeShowEditModal = (data) => {
    setShowEditModal(!showEditModal);
    setCurrentEditItem(data);
  };

  const filteringByPriority = (priority) => {
    let filteredByPriorityTodoElements = [];
    if (priority === '') {
      filteredByPriorityTodoElements = [...todoElements];
    } else {
      filteredByPriorityTodoElements = todoElements.filter(item => item.data.priority === priority);
    }
    setFilterByPriority(priority);
    setIncompleteTodoElements(filteredByPriorityTodoElements.filter(item => !item.data.isCompleted));
    setCompletedTodoElements(filteredByPriorityTodoElements.filter(item => item.data.isCompleted));
  };

  return (
    <Container className="todo-app">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('todo_application.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <Col md={9} xl={10}>
          <Fragment>
            <DividerLine title="Active" />
            <TodoListWrapper
              todoElements={incompleteTodoElements}
              changeShowEditModal={changeShowEditModal}
              editTodoElementAction={editTodoElementAction}
              isFetching={isFetching}
            />
            <DividerLine title="Done" />
            <TodoListWrapper
              isCompleted
              todoElements={completedTodoElements}
              changeShowEditModal={changeShowEditModal}
              editTodoElementAction={editTodoElementAction}
              isFetching={isFetching}
            />
            <div>
              <DividerLine title="Archived" />
              <TodoListWrapper
                isArchived
                todoElements={archivedTodoElements}
                editTodoElementAction={editTodoElementAction}
                deleteTodoElementAction={deleteTodoElementAction}
                isFetching={isFetching}
              />
            </div>
          </Fragment>
        </Col>
        <Col md={3} xl={2}>
          <TodoSidebar
            changeShowEditModal={changeShowEditModal}
            filterByPriority={filteringByPriority}
          />
        </Col>
        <ItemEditModal
          theme={theme}
          rtl={rtl}
          showEditModal={showEditModal}
          currentEditItem={currentEditItem && currentEditItem.data}
          changeShowEditModal={changeShowEditModal}
          todoElements={todoElements}
          addTodoElementAction={addTodoElementAction}
          editTodoElementAction={editTodoElementAction}
        />
      </Row>
    </Container>
  );
};

Todo.propTypes = {
  theme: ThemeProps.isRequired,
  rtl: PropTypes.string.isRequired,
  todoElements: PropTypes.arrayOf(todoCard).isRequired,
  fetchTodoListDataAction: PropTypes.func.isRequired,
  editTodoElementAction: PropTypes.func.isRequired,
  addTodoElementAction: PropTypes.func.isRequired,
  deleteTodoElementAction: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const todoElements = state.todo && state.todo.data && state.todo.data.elements
    && state.todo.data.elements.length > 0 ? [...state.todo.data.elements] : [];
  return ({
    todoElements,
    isFetching: state.todo && state.todo.isFetching,
    theme: state.theme,
    rtl: state.rtl && state.rtl.direction,
  });
};

const mapDispatchToProps = {
  fetchTodoListDataAction: fetchTodoListData,
  editTodoElementAction: editTodoElement,
  addTodoElementAction: addTodoElement,
  deleteTodoElementAction: deleteTodoElement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
