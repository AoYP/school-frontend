import moment from "moment";

function Holidays() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const now = moment([year, month, day]);
  const firstDayOfHolidays = moment([year, 6, 23]);
  
  const daysToHolidays = firstDayOfHolidays.diff(now, 'days')+1

  return(
    <div className="holidays">
      {(month === 7 || month === 8) ? <div>Wakacje!</div> :
       <div>Szkoła...</div>}
      <div>{daysToHolidays}</div>
    </div>
  )
}

export default Holidays