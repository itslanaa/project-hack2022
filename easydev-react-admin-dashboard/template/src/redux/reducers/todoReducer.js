const initialState = {
  todos: [{
    id: 213,
    title: 'Create the main page design',
    description: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid '
      + 'in so vexed words. Gay welcome led add lasting chiefly say looking. ',
    completed: false,
    priority: 'high',
  },
  {
    id: 214,
    title: 'Write to Sarah',
    description: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid '
        + 'in so vexed words. Gay welcome led add lasting chiefly say looking. ',
    completed: false,
    priority: 'low',
  },
  {
    id: 215,
    title: 'Make a mind-map',
    description: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid '
        + 'in so vexed words. Gay welcome led add lasting chiefly say looking. ',
    completed: false,
    priority: 'medium',
  },
  {
    id: 216,
    title: 'Write a text',
    description: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid '
        + 'in so vexed words. Gay welcome led add lasting chiefly say looking. ',
    completed: true,
    priority: 'low',
  },
  {
    id: 217,
    title: 'Make a blog post about marketing',
    description: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid '
        + 'in so vexed words. Gay welcome led add lasting chiefly say looking. ',
    completed: true,
    priority: 'low',
  }],
  priorityFilter: '',
};

function getId(state) {
  return state.todo.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
}
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
 ...state,
todos: [{
          title: action.title,
          description: action.description,
          priority: action.priority,
          completed: false,
          id: getId(state),
        }, ...state.todo],
};
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todo.map(todo => (todo.id === action.id
        ? ({
          ...todo,
          updated: false,
          completed: !todo.completed,
        }) : todo)),
      };
    case 'DELETE_TODO':
      return { ...state, todos: state.todo.filter(todo => todo.id !== action.id) };
    case 'PRIORITY_FILTER':
      return { ...state, priorityFilter: action.priorityFilter };
    default:
      return state;
  }
};
export default todoReducer;
