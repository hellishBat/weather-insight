// convertTime
const timeToHrsMins = (unixTime: number) => {
  return new Date(unixTime * 1000).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })
}

const timeToWeekDay = (unixTime: number) => {
  return new Date(unixTime * 1000).toLocaleString('en-US', { weekday: 'short' })
}

export { timeToHrsMins, timeToWeekDay }
