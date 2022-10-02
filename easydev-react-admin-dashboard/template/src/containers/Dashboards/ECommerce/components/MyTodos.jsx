import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Panel from '@/shared/components/Panel';
import todoCard from '../../../Todo/types';
import ToDo from './ToDo';

const editTodoElementData = ({ todoElements, editTodoElement }) => (e) => {
  const todoId = e.target.id;
  const elementData = todoElements.find(item => Number(item.data.id) === Number(todoId)).data;
  elementData.isCompleted = !elementData.isCompleted;
  editTodoElement(elementData);
};

const MyTodos = ({ todoElements, editTodoElement }) => {
  const { t } = useTranslation('common');
  const [noArchivedTodoElements, setNoArchivedTodoElements] = useState(null);
  const [archivedTodoElements, setArchivedTodoElements] = useState(null);

  useEffect(() => {
    const filteredData = [...todoElements];
    setNoArchivedTodoElements(filteredData.filter(item => !item.data.isArchived));
    setArchivedTodoElements(filteredData.filter(item => item.data.isArchived));
  }, [todoElements]);

  return (
    <Panel
      md={12}
      lg={5}
      xl={3}
      xs={12}
      title={t('dashboard_commerce.my_todos')}
      subhead="Do not forget to do everything"
    >
      {noArchivedTodoElements && noArchivedTodoElements.map(todo => (
        <ToDo
          key={todo.data.id}
          id={todo.data.id}
          label={todo.data.title}
          checked={todo.data.isCompleted}
          onChange={editTodoElementData({ todoElements, editTodoElement })}
        />
      ))}
      {archivedTodoElements && archivedTodoElements.map(todo => (
        <ToDo
          key={todo.data.id}
          id={todo.data.id}
          label={todo.data.title}
          disabled
        />
      ))}
    </Panel>
  );
};

MyTodos.propTypes = {
  editTodoElement: PropTypes.func.isRequired,
  todoElements: PropTypes.arrayOf(todoCard).isRequired,
};

export default MyTodos;
