
export const timeSince = (date) => {
  let seconds = Math.abs(Math.floor((Date.now() - Date.parse(date)) / 1000))

  let interval = seconds / 31536000;
  console.log('sec int', seconds, interval)
  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  console.log('year', seconds, interval)

  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  console.log('montt', seconds, interval)

  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  console.log('days', seconds, interval)

  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  console.log('hours', seconds, interval)

  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
