// convertTime
import moment from 'moment'

const unixTimeToHrsMins = (unixTime: number, unixTimezoneOffset: number) => {
  return moment
    .unix(unixTime + unixTimezoneOffset)
    .utc()
    .format('HH:mm')
}

const unixTimeToWeekDay = (unixTime: number, unixTimezoneOffset: number) => {
  return moment
    .unix(unixTime + unixTimezoneOffset)
    .utc()
    .format('ddd')
}

export { unixTimeToHrsMins, unixTimeToWeekDay }
