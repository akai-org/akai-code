import { IconType } from "./../../ui/ScheduleItem/ScheduleItem";

type ScheduleTimer = {
  name: string;
  startTimestamp: string;
  endTimestamp: string;
  icon: IconType;
  startTimeText: string;
  endTimeText: string;
};

export const scheduleList: ScheduleTimer[] = [
  {
    name: "hackatonStart",
    startTimestamp: "2022-11-04T18:00:00+0200",
    endTimestamp: "2022-11-04T19:00:00+0200",
    icon: "clock",
    startTimeText: "18:00",
    endTimeText: "19:00",
  },
  {
    name: "javaLecture",
    startTimestamp: "2022-10-16T12:00:00+0200",
    endTimestamp: "2022-10-16T16:00:00+0200",
    icon: "qr",
    startTimeText: "20:00",
    endTimeText: "21:00",
  },
  {
    name: "graphQLforBegginers",
    startTimestamp: "2022-10-16T16:00:00+0200",
    endTimestamp: "2022-11-04T18:00:00+0200",
    icon: "braces",
    startTimeText: "21:30",
    endTimeText: "22:00",
  },
  {
    name: "rememberToBeHydrated",
    startTimestamp: "2022-11-04T18:00:00+0200",
    endTimestamp: "2022-11-04T19:00:00+0200",
    icon: "braces",
    startTimeText: "23:00",
    endTimeText: "24:00",
  },
  {
    name: "pizzaForBreakfast",
    startTimestamp: "2022-11-04T18:00:00+0200",
    endTimestamp: "2022-11-04T19:00:00+0200",
    icon: "clock",
    startTimeText: "10:30",
    endTimeText: "12:00",
  },
  {
    name: "whyDjangoOnHackatonIsNotTheBestIdea",
    startTimestamp: "2022-11-04T18:00:00+0200",
    endTimestamp: "2022-11-04T19:00:00+0200",
    icon: "braces",
    startTimeText: "14:00",
    endTimeText: "15:00",
  },
  {
    name: "pizzaForLunch",
    startTimestamp: "2022-11-04T18:00:00+0200",
    endTimestamp: "2022-11-04T19:00:00+0200",
    icon: "qr",
    startTimeText: "15:00",
    endTimeText: "18:00",
  },
  {
    name: "pizzaForDinner",
    startTimestamp: "2022-11-04T18:00:00+0200",
    endTimestamp: "2022-11-04T19:00:00+0200",
    icon: "braces",
    startTimeText: "20:30",
    endTimeText: "22:00",
  },
];
