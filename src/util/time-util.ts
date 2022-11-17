export function calculateMinutes(time: number) {
  return Math.floor(time / 60);
}

export function calculateSeconds(time: number) {
  const minutes = calculateMinutes(time);
  return Math.floor(time - minutes * 60);
}