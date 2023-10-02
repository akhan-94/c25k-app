export const secondsIntoReadableTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsString =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
  return `${minutesString}:${secondsString}`;
};
