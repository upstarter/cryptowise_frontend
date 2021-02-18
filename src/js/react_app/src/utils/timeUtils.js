
export const timeSince = (date) => {
  let now = Date.now()
  let then = Date.parse(date)
  let seconds = Math.floor(Math.abs((now - then)) / 1000)
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }

  interval = seconds / 60;
  console.log('nnn', now, then, seconds, interval)

  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
