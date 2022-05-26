
function Data () {
  const today = new Date();
  const monthNames = ["styczeń","luteń","marzecień","kwiecień","majecień","czerwiecień","lipiecień","sierpiecień","wrzesiecień","paździercień","listopacień","grudziecień"]
  const time = today.getHours() + ":" + today.getMinutes(); 
  const date = today.getDate() + " " + monthNames[today.getMonth()] + " " + today.getFullYear();
  return(
    <div className="date">{time}<br />{date}</div>
  )
}

export default Data