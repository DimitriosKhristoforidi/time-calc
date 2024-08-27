export const calculateOneByOne = (times) => {
  let hours = 0;
  let mins = 0;

  for (let i in times) {
    let { hour, minute } = times[i];
    hours += +hour;
    mins += +minute;
  }

  if (mins > 59) {
    let minInHour = mins / 60;
    let fullHourInMin = +Math.floor(minInHour);
    hours += fullHourInMin;
    mins = Math.round((minInHour - fullHourInMin) * 60);
  }

  if (mins < 10) {
    mins = `0${mins}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${hours}:${mins}`;
};
