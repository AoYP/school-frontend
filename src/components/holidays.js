import moment from 'moment'
import '../css/holidays.css'

function Holidays() {
  function lastFriday() {
    let sub = 0
    const lastDay = moment().month('june').endOf('month')
    if (lastDay.day() >= 5) sub = lastDay.day() - 5
    else sub = lastDay.day() + 2
    return lastDay.subtract(sub, 'days')
  }

  const now = moment()
  const firstDayOfHolidays = lastFriday()
  let daysToHolidays = firstDayOfHolidays.diff(now, 'days') - 1
  if (daysToHolidays < 0) daysToHolidays = 365 + daysToHolidays

  return (
    <div className='holidays-content'>
      <div>
        <div className='holidays-title'>{daysToHolidays}</div>
        <div className='holidays-subtitle'>dni do wakacji</div>
      </div>
    </div>
  )
}

export default Holidays
