import moment from 'moment';

const year = moment().format('YYYY');
const mounth = moment().format('MM') - 1;
const prevMounth = mounth - 1;
const nextMounth = mounth + 1;

export default [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(year, mounth, 0),
    end: new Date(year, mounth, 1),
    priority: 'high',
  },
  {
    id: 1,
    title: 'Escape from the Dragon',
    start: new Date(year, prevMounth, 7, 12, 0, 0),
    end: new Date(year, prevMounth, 10),
    priority: 'high',
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(year, nextMounth, 13, 0, 0, 0),
    end: new Date(year, nextMounth, 20, 0, 0, 0),
    priority: 'high',
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(year, 11, 6, 0, 0, 0),
    end: new Date(year, 11, 13, 0, 0, 0),
    priority: 'high',
  },

  {
    id: 4,
    title: 'Find blacksmith',
    start: new Date(year, prevMounth, 9, 0, 0, 0),
    end: new Date(year, prevMounth, 9, 0, 0, 0),
    priority: 'family',
  },
  {
    id: 5,
    title: 'Learn more about princesses',
    start: new Date(year, mounth, 11),
    end: new Date(year, mounth, 13),
    priority: 'high',
  },
  {
    id: 6,
    title: 'Get a new mail',
    start: new Date(year, prevMounth, 12, 10, 30, 0, 0),
    end: new Date(year, prevMounth, 12, 12, 30, 0, 0),
    priority: 'non',
  },
  {
    id: 7,
    title: 'Lunch with ghoul',
    start: new Date(year, mounth, 12, 12, 0, 0, 0),
    end: new Date(year, mounth, 12, 13, 0, 0, 0),
    priority: 'non',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(year, mounth, 12, 14, 0, 0, 0),
    end: new Date(year, mounth, 12, 15, 0, 0, 0),
    priority: 'high',
  },
  {
    id: 9,
    title: 'Training of the squire',
    start: new Date(year, prevMounth, 12, 17, 0, 0, 0),
    end: new Date(year, prevMounth, 12, 17, 30, 0, 0),
    priority: 'family',
  },
  {
    id: 10,
    title: 'Dinner with King',
    start: new Date(year, mounth, 12, 20, 0, 0, 0),
    end: new Date(year, mounth, 12, 21, 0, 0, 0),
    priority: 'non',
  },
  {
    id: 11,
    title: 'Duel',
    start: new Date(year, prevMounth, 13, 7, 0, 0),
    end: new Date(year, prevMounth, 13, 10, 30, 0),
    priority: 'family',
  },
  {
    id: 12,
    title: 'Masked ball',
    start: new Date(year, mounth, 17, 19, 30, 0),
    end: new Date(year, mounth, 18, 2, 0, 0),
    priority: 'family',
  },
  {
    id: 13,
    title: 'Save the Princess from the Dragon',
    start: new Date(year, nextMounth, 20, 19, 30, 0),
    end: new Date(year, nextMounth, 22, 2, 0, 0),
    priority: 'high',
  },
  {
    id: 14,
    title: 'Find information about magic',
    start: new Date(year, mounth, 9, 0, 0, 0),
    end: new Date(year, mounth, 11, 0, 0, 0),
    priority: 'non',
  },
  {
    id: 14,
    title: 'Get drink with the Dragon at the wedding',
    start: new Date(year, prevMounth, 26, 0, 0, 0),
    end: new Date(year, prevMounth, 26, 0, 0, 0),
    priority: 'non',
  },
];
