type ScheduleTimer = {
  id: number;
  startTimestamp: Date;
  endTimestamp: Date;
};

export const scheduleList: ScheduleTimer[] = [
  {
    id: 1,
    startTimestamp: new Date(2022, 9, 7, 23, 30),
    endTimestamp: new Date(2022, 9, 8, 23, 35),
  },
  {
    id: 2,
    startTimestamp: new Date(2022, 9, 10, 23, 40),
    endTimestamp: new Date(2022, 9, 12, 23, 50),
  },
  {
    id: 3,
    startTimestamp: new Date(2022, 10, 4, 15, 0),
    endTimestamp: new Date(2022, 10, 4, 16, 0),
  },
  {
    id: 4,
    startTimestamp: new Date(2022, 10, 4, 17, 0),
    endTimestamp: new Date(2022, 10, 4, 18, 0),
  },
  {
    id: 5,
    startTimestamp: new Date(2022, 10, 5, 12, 0),
    endTimestamp: new Date(2022, 10, 5, 14, 0),
  },
  {
    id: 6,
    startTimestamp: new Date(2022, 10, 5, 15, 0),
    endTimestamp: new Date(2022, 10, 5, 16, 0),
  },
  {
    id: 7,
    startTimestamp: new Date(2022, 10, 5, 17, 0),
    endTimestamp: new Date(2022, 10, 5, 18, 0),
  },
  {
    id: 8,
    startTimestamp: new Date(2022, 10, 5, 20, 0),
    endTimestamp: new Date(2022, 10, 5, 22, 0),
  },
];
