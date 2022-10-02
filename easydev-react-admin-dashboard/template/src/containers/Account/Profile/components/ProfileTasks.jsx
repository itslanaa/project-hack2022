import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import { editTodoElement, fetchTodoListData } from '../../../Todo/redux/actions';
import todoCard from '../../../Todo/types';
import ProfileToDo from './ProfileTodo';

const editTodoElementData = ({ todoElements, editTodoElementAction }) => (e) => {
  const todoId = e.target.id;
  const elementData = todoElements.find(item => Number(item.data.id) === Number(todoId)).data;
  elementData.isCompleted = !elementData.isCompleted;
  editTodoElementAction(elementData);
};

const ProfileTasks = ({ todoElements, fetchTodoListDataAction, editTodoElementAction }) => {
  const [noArchivedTodoElements, setNoArchivedTodoElements] = useState(null);
  const [archivedTodoElements, setArchivedTodoElements] = useState(null);
  const [prevTodoElements, setPrevTodoElements] = useState(null);

  useEffect(() => {
    if (JSON.stringify(todoElements) !== JSON.stringify(prevTodoElements)) {
      if (todoElements.length === 0 && prevTodoElements === null) { // You can delete it if you need
        fetchTodoListDataAction();
      }
      const filteredData = [...todoElements];
      setNoArchivedTodoElements(filteredData.filter(item => !item.data.isArchived));
      setArchivedTodoElements(filteredData.filter(item => item.data.isArchived));
      setPrevTodoElements([...todoElements]);
    }
  }, [todoElements, fetchTodoListDataAction, prevTodoElements]);

  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <CardBody className="profile__card">
          <p className="profile__current-tasks-title">Current tasks <span>{todoElements.length}</span></p>
          <div className="profile__current-tasks">
            {noArchivedTodoElements && noArchivedTodoElements.map(element => (
              <ProfileToDo
                key={element.data.id}
                id={element.data.id}
                label={element.data.title}
                checked={element.data.isCompleted}
                onChange={editTodoElementData({ todoElements, editTodoElementAction })}
              />
            ))}
            {archivedTodoElements && archivedTodoElements.map(element => (
              <ProfileToDo
                key={element.data.id}
                id={element.data.id}
                label={element.data.title}
                checked={element.data.isCompleted}
                disabled
              />
            ))}
            <Link to="/todo" className="profile__see-all-tasks">See all tasks</Link>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

ProfileTasks.propTypes = {
  fetchTodoListDataAction: PropTypes.func,
  editTodoElementAction: PropTypes.func,
  todoElements: PropTypes.arrayOf(todoCard).isRequired,
};

ProfileTasks.defaultProps = {
  fetchTodoListDataAction: () => {},
  editTodoElementAction: () => {},
};

const mapStateToProps = (state) => {
  const todoElements = state.todo && state.todo.data && state.todo.data.elements
  && state.todo.data.elements.length > 0 ? [...state.todo.data.elements] : [];
  return ({
    todoElements,
  });
};

const mapDispatchToProps = {
  fetchTodoListDataAction: fetchTodoListData,
  editTodoElementAction: editTodoElement,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTasks);
