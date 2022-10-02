import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LoadingIcon from 'mdi-react/LoadingIcon';
import TodoItem from './TodoItem';
import todoCard from '../types';

const TodoList = ({
  todoElements,
  changeShowEditModal, editTodoElementAction, deleteTodoElementAction,
  isCompleted, isArchived,
}) => {
  const todoListClass = classNames({
    'todo__item-completed': isCompleted,
    'todo__item-archived': isArchived,
  });

  return (
    <Fragment>
      {todoElements && todoElements.length > 0 && (
        todoElements.map(todo => (
          <div key={todo.data.id} className={todoListClass}>
            <TodoItem
              todoItemData={todo}
              changeShowEditModal={changeShowEditModal}
              editTodoElement={editTodoElementAction}
              deleteTodoElement={deleteTodoElementAction}
            />
          </div>
        ))
      )}
    </Fragment>
  );
};

TodoList.propTypes = {
  todoElements: PropTypes.arrayOf(todoCard),
  changeShowEditModal: PropTypes.func.isRequired,
  editTodoElementAction: PropTypes.func.isRequired,
  deleteTodoElementAction: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

TodoList.defaultProps = {
  todoElements: null,
};

const TodoListWrapper = ({
  todoElements,
  changeShowEditModal, editTodoElementAction, deleteTodoElementAction,
  isFetching, isCompleted, isArchived,
}) => (
  <Fragment>
    {isFetching ? (
      <div className="todo__panel-refresh">
        <LoadingIcon />
      </div>
    ) : (
      <TodoList
        todoElements={todoElements}
        changeShowEditModal={changeShowEditModal}
        editTodoElementAction={editTodoElementAction}
        deleteTodoElementAction={deleteTodoElementAction}
        isCompleted={isCompleted}
        isArchived={isArchived}
      />
    )}
  </Fragment>
);

TodoListWrapper.propTypes = {
  todoElements: PropTypes.arrayOf(todoCard),
  changeShowEditModal: PropTypes.func,
  editTodoElementAction: PropTypes.func,
  deleteTodoElementAction: PropTypes.func,
  isFetching: PropTypes.bool,
  isCompleted: PropTypes.bool,
  isArchived: PropTypes.bool,
};

TodoListWrapper.defaultProps = {
  todoElements: [],
  deleteTodoElementAction: () => {},
  changeShowEditModal: () => {},
  editTodoElementAction: () => {},
  isFetching: false,
  isCompleted: false,
  isArchived: false,
};

export default TodoListWrapper;
