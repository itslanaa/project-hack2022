import moment from 'moment';

export default {
  getTodoData: () => new Promise((resolve) => {
    const todoData = {
      elements: [
        {
          data: {
            id: 1,
            title: 'Create the main page design',
            description: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr'
              + 'rapid in so vexed words. Gay welcome led add lasting chiefly say looking. ',
            isCompleted: false,
            isArchived: true,
            priority: 'high',
            date: moment('2020-10-10').format('MM/DD/YYYY'),
          },
          isEdit: false,
          isFetching: false,
          error: null,
        },
        {
          data: {
            id: 2,
            title: 'Write to Sarah',
            description: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr'
              + 'rapid in so vexed words. Gay welcome led add lasting chiefly say looking. ',
            isCompleted: false,
            isArchived: false,
            priority: 'low',
            date: moment('2020-10-10').format('MM/DD/YYYY'),
          },
          isEdit: false,
          isFetching: false,
          error: null,
        },
        {
          data: {
            id: 3,
            title: 'Make a mind-map',
            description: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr'
              + 'rapid in so vexed words. Gay welcome led add lasting chiefly say looking. ',
            isCompleted: false,
            isArchived: false,
            priority: 'medium',
            date: moment('2020-10-10').format('MM/DD/YYYY'),
          },
          isEdit: false,
          isFetching: false,
          error: null,
        },
        {
          data: {
            id: 4,
            title: 'Write a text',
            description: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr'
              + 'rapid in so vexed words. Gay welcome led add lasting chiefly say looking. ',
            isCompleted: true,
            isArchived: false,
            priority: 'low',
            date: moment('2020-10-10').format('MM/DD/YYYY'),
          },
          isEdit: false,
          isFetching: false,
          error: null,
        },
        {
          data: {
            id: 5,
            title: 'Make a blog post about marketing',
            description: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr'
              + 'rapid in so vexed words. Gay welcome led add lasting chiefly say looking. ',
            isCompleted: true,
            isArchived: false,
            priority: 'low',
            date: moment('2020-10-10').format('MM/DD/YYYY'),
          },
          isEdit: false,
          isFetching: false,
          error: null,
        },
      ],
    };
    setTimeout(() => {
      resolve({ data: todoData });
    }, 1000);
  }),
};
