import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'reactstrap';
import PlusIcon from 'mdi-react/PlusIcon';

const todoSidebarImg = `${process.env.PUBLIC_URL}/img/sidebar_img.svg`;

const TodoSidebar = ({ changeShowEditModal, filterByPriority }) => {
  const addNewTask = () => {
    changeShowEditModal();
  };

  const handlePriorityChange = (e) => {
    filterByPriority(e.target.value);
  };

  return (
    <div className="todo__input-new">
      <div className="todo__sidebar">
        <img className="todo_sidebar-image" src={todoSidebarImg} alt="sidebar-img" />
        <Button className="todo__btn-add-new" onClick={addNewTask}><PlusIcon /> New task</Button>
        <div className="todo__priority-filter">
          <p className="title">Priority</p>
          <ul className="todo__priority-filter-list">
            <li>
              <input
                className="todo__filter-radio"
                type="radio"
                id="priority-all"
                name="priority-filter"
                value=""
                onClick={handlePriorityChange}
                defaultChecked
              />
              <label htmlFor="priority-all">All</label>
            </li>
            <li>
              <input
                className="todo__filter-radio"
                type="radio"
                id="priority-low"
                name="priority-filter"
                value="low"
                onClick={handlePriorityChange}
              />
              <label htmlFor="priority-low">Low</label>
            </li>
            <li>
              <input
                className="todo__filter-radio"
                type="radio"
                id="priority-medium"
                name="priority-filter"
                value="medium"
                onClick={handlePriorityChange}
              />
              <label htmlFor="priority-medium">Medium</label>
            </li>
            <li>
              <input
                className="todo__filter-radio"
                type="radio"
                id="priority-high"
                name="priority-filter"
                value="high"
                onClick={handlePriorityChange}
              />
              <label htmlFor="priority-high">High</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

TodoSidebar.propTypes = {
  changeShowEditModal: PropTypes.func.isRequired,
  filterByPriority: PropTypes.func.isRequired,
};

export default TodoSidebar;
