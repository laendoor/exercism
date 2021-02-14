const gigaMillisecond = Math.pow(10, 9) * 1000;

export const gigasecond = date => new Date(date.getTime() + gigaMillisecond);
