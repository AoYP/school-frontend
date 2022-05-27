import moment from 'moment';

function Holidays() {
  const date = new Date();
  const month = date.getMonth();

  function lastFriday() {
    let sub = 0;
    const lastDay = moment().month('june').endOf('month');
    if (lastDay.day() >= 5) sub = lastDay.day() - 5;
    else sub = lastDay.day() + 2;
    return lastDay.subtract(sub, 'days');
  }

  const now = moment();
  const firstDayOfHolidays = lastFriday();
  let daysToHolidays = firstDayOfHolidays.diff(now, 'days') - 1;
  if (daysToHolidays < 0) daysToHolidays = 365 + daysToHolidays;

  return (
    <div className="holidays">
      <div className='daysToHolidays'>
        {daysToHolidays}
      </div>
      <div>dni do wakacji</div>
    </div>
  );
}

export default Holidays;
