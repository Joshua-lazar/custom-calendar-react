export default [
  {
    id: 0,
    title: 'eid ul adha',
    allDay: true,
    start: new Date(2022, 6, 10),
    end: new Date(2022, 6, 13),
  },
  {
    id: 1,
    title: 'Client Meeting',
    start: new Date(2022, 6, 27),
    end: new Date(2022, 6, 28),
  },

  {
    id: 2,
    title: 'ChristMass',
    start: new Date(2022, 6, 25, 12, 25, 27),
    end: new Date(2022, 6, 26, 2, 25, 27),
  },

  {
    id: 3,
    title: 'Holiday',
    start: new Date(2022, 6, 3, 0, 0, 0),
    end: new Date(2022, 6, 5, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
];
