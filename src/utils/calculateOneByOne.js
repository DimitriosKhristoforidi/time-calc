export const calculateOneByOne = (times) => {
  let hours = 0;
  let mins = 0;

  const totalMinutes = times.reduce((acc, time) => {
    const { hour, minute } = time;
    return acc + hour * 60 + minute;
  }, 0);

  hours = Math.floor(totalMinutes / 60);
  mins = totalMinutes % 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (mins < 10) {
    mins = `0${mins}`;
  }

  return `${hours}:${mins}`;
};

export const calculateOneByOneSubstract = (times) => {
  let firstTotalMinutes = times[0].hour * 60 + times[0].minute;

  const minutesAfterSubtract = times.slice(1).reduce((acc, time) => {
    const { hour, minute } = time;
    return acc - hour * 60 - minute;
  }, firstTotalMinutes);

  let totalHours =
    minutesAfterSubtract > 0
      ? Math.floor(minutesAfterSubtract / 60)
      : Math.ceil(minutesAfterSubtract / 60);
  let totalMinutes = Math.abs(minutesAfterSubtract) % 60;

  if (Math.abs(totalHours) < 10) {
    totalHours = `${totalHours < 0 ? "-" : ""}0${Math.abs(totalHours)}`;
  }

  if (totalMinutes < 10) {
    totalMinutes = `0${totalMinutes}`;
  }

  return `${totalHours}:${totalMinutes}`;
};
