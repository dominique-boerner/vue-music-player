import { calculateMinutes, calculateSeconds } from "@/util/time-util";

/**
 * Formats the song time in the format m:ss
 * @param time
 */
export function formatSongTime(time: number) {
  const minutes = calculateMinutes(time);
  const seconds = calculateSeconds(time);

  let secondsString = "" + seconds;

  if (seconds < 10) {
    secondsString = `0${seconds}`;
  }

  return `${minutes}:${secondsString}`;
}