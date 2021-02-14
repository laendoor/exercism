const daysMap = {
  'Sunday': 0,
  'Monday': 1,
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Friday': 5,
  'Saturday': 6,
};

const occurrenceMap = {
  'teenth': 0,
  'last': 0,
  'first': 0,
  'second': 1,
  'third': 2,
  'fourth': 3,
};

// I could use just one function with another param, but I think it could be confused
const daysToAdd = (currentWeekday, goalWeekday) => (7 - currentWeekday + goalWeekday) % 7;
const daysToSub = (currentWeekday, goalWeekday) => -(7 + currentWeekday - goalWeekday) % 7;

export const meetup = (year, month, occurrence, dayOfWeek) => {
  let date;
  let days;
  const weekdayNumber = daysMap[dayOfWeek];
  const weeksToAdd = occurrenceMap[occurrence];

  if (occurrence === 'last') {
    date = new Date(year, month, 1);  // I could use Date(year, month, 0) but is just a JS hack
    date.setDate(date.getDate() - 1); // I think this way is clearer
    days = daysToSub(date.getDay(), weekdayNumber);
  } else {
    const startDay = occurrence === 'teenth' ? 13 : 1;
    date = new Date(year, month - 1, startDay);
    days = daysToAdd(date.getDay(), weekdayNumber) + (7 * weeksToAdd);
  }
  
  date.setDate(date.getDate() + days);
  return date;
};
