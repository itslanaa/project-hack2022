import { createAction } from 'redux-actions';
import api from '../../../utils/apiClient';

export const fetchTodoListDataRequest = createAction('FETCH_TODO_LIST_DATA_REQUEST');
export const fetchTodoListDataSuccess = createAction('FETCH_TODO_LIST_DATA_SUCCESS');
export const fetchTodoListDataFailure = createAction('FETCH_TODO_LIST_DATA_FAILURE');
export const updateTodoListData = createAction('UPDATE_TODO_LIST_DATA');

export const fetchTodoListData = () => async (dispatch) => {
  try {
    dispatch(fetchTodoListDataRequest());
    const response = await api.todo.getTodoData(); // Fake request example
    const todoListData = response.data;
    dispatch(fetchTodoListDataSuccess(todoListData));
  } catch (error) {
    dispatch(fetchTodoListDataFailure({ error }));
    throw error;
  }
};

const processError = (todoElementData, error, getState) => {
  const todoListCopy = getState().todo && getState().todo.data && getState().todo.data.elements
    && [...getState().todo.data.elements];
  const elementIndex = todoListCopy.findIndex(e => e.data.id === todoElementData.id);
  todoListCopy[elementIndex] = {
    data: todoElementData,
    isEdit: false,
    isFetching: false,
    error,
  };
  return todoListCopy;
};

const updateTodoElementData = (newTodoElementData, getState) => {
  const todoListCopy = [...getState().todo.data.elements];
  const elementIndex = todoListCopy.findIndex(e => e.data.id === newTodoElementData.id);
  todoListCopy[elementIndex] = {
    data: newTodoElementData,
    isEdit: false,
    isFetching: false,
    error: null,
  };
  return todoListCopy;
};

export const editTodoElement = value => async (dispatch, getState) => {
  let updatedTodoList = [];
  try {
    updatedTodoList = updateTodoElementData(value, getState);
    dispatch(updateTodoListData(updatedTodoList));
  } catch (error) {
    updatedTodoList = processError(value, error, getState);
    dispatch(updateTodoListData(updatedTodoList));
    throw error;
  }
};

export const deleteTodoElement = id => async (dispatch, getState) => {
  const todoDataCopy = getState().todo && getState().todo.data && { ...getState().todo.data };
  const todoListCopy = [...todoDataCopy.elements];
  const elementIndex = todoListCopy.findIndex(e => e.data.id === id);
  todoListCopy.splice(elementIndex, 1);
  dispatch(updateTodoListData(todoListCopy));
};

export const addTodoElement = newElementData => async (dispatch, getState) => {
  const todoDataCopy = getState().todo && getState().todo.data && { ...getState().todo.data };
  const todoListCopy = [...todoDataCopy.elements];
  todoListCopy.unshift({
    data: {
      ...newElementData,
    },
    isEdit: false, // maybe you will need to make it true, depends on your logic
    isFetching: false,
    error: null,
  });
  dispatch(updateTodoListData(todoListCopy));
};
