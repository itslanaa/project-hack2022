import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
import PencilOutlineIcon from 'mdi-react/PencilOutlineIcon';
import PackageVariant from 'mdi-react/PackageVariantIcon';
import PackageVariantClosed from 'mdi-react/PackageVariantClosedIcon';
import classNames from 'classnames';
import todoCard from '../types';

const TodoItem = ({
  todoItemData, changeShowEditModal, editTodoElement, deleteTodoElement,
}) => {
  const priorityColorsClass = classNames({
    'todo__priority-indicator': true,
    low: todoItemData.data.priority === 'low',
    medium: todoItemData.data.priority === 'medium',
    high: todoItemData.data.priority === 'high',
  });

  const editItem = (items) => {
    changeShowEditModal(items);
  };

  const editTodoElementData = (items) => {
    if (!todoItemData.isArchived) {
      const todoItemDataCopy = { ...items };
      todoItemDataCopy.isCompleted = !todoItemData.data.isCompleted;
      editTodoElement(todoItemDataCopy);
    }
  };

  const archivedItem = (items) => {
    const todoItemDataCopy = { ...items };
    todoItemDataCopy.isArchived = !todoItemDataCopy.isArchived;
    editTodoElement(todoItemDataCopy);
  };

  const deleteItem = () => {
    if (todoItemData.data.isArchived) {
      deleteTodoElement(todoItemData.data.id);
    }
  };

  return (
    <Card>
      <CardBody className="todo__item">
        <label htmlFor={todoItemData.data.title} className="todo__label-checkbox">
          <input
            id={todoItemData.data.title}
            type="checkbox"
            className="todo__complete-toggle"
            defaultChecked={todoItemData.data.isCompleted}
            required
            onClick={(e) => {
              e.preventDefault();
              editTodoElementData(todoItemData.data);
            }}
          />
          <span className="checkbox-indicator" />
        </label>
        <div className="todo__info">
          <div className="todo__content">
            <h3>{todoItemData.data.title}</h3>
            <div className="todo__description">
              <div>{todoItemData.data.description}</div>
            </div>
          </div>
          <div className="todo__additional-wrapper">
            <div className="todo__additional">
              <p className="todo__due-date">Due date: {todoItemData.data.date}</p>
              <div className="todo__priority">
                <span>Priority:</span>
                <span className={priorityColorsClass} />
              </div>
            </div>
            <div className="todo__btn-wrapper">
              {!todoItemData.data.isArchived ? (
                <div>
                  <button
                    className="todo__delete-btn"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      editItem(todoItemData);
                    }}
                  >
                    <PencilOutlineIcon />
                  </button>
                  <button
                    className="todo__delete-btn"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      archivedItem(todoItemData.data);
                    }}
                  >
                    <PackageVariantClosed />
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="todo__delete-btn"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      archivedItem(todoItemData.data);
                    }}
                  >
                    <PackageVariant />
                  </button>
                  <button
                    className="todo__delete-btn todo__delete-btn--delete"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteItem(todoItemData);
                    }}
                  >
                    <DeleteForeverIcon />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

TodoItem.propTypes = {
  todoItemData: todoCard.isRequired,
  changeShowEditModal: PropTypes.func.isRequired,
  editTodoElement: PropTypes.func.isRequired,
  deleteTodoElement: PropTypes.func.isRequired,
};

export default TodoItem;
