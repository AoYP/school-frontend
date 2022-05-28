function Currentlesson() {
  var x = 0;
  let i = parseFloat(8.0), j = 0;
  let statement = "";
  const today = new Date()
  let hour = today.getHours()
  let minutes = today.getMinutes()
  let currentTime = hour + "." + minutes;
  let current = parseFloat(currentTime);
  if (current === 17.34) {
    x = 1;
  } else {
    x = 2;
  }

  /*
  if ((current > 8.45 && current < 8.55) || (current > 9.40 && current < 9.50) || (current > 10.35 && current < 10.45) || (current > 11.30 && current < 11.40) || (current > 12.25 && current < 12.30) || (current > 13.15 && current < 13.45) || (current > 14.30 && current < 14.35) || (current > 15.20 && current < 15.30) || (current > 16.15 && current < 16.25) || (current > 17.10 && current < 17.20)) {
    statement = "Przerwa";
  } else if ((current > 8.00 && current < 8.45) || (current > 8.55 && current < 9.40) || (current > 9.50 && current < 10.35) || (current > 10.45 && current < 11.30) || (current > 11.40 && current < 12.25) || (current > 12.30 && current < 13.15) || (current > 13.45 && current < 14.30) || (current > 14.35 && current < 15.20) || (current > 15.30 && current < 16.15) || (current > 16.25 && current < 17.10) || (current > 17.20 && current < 18.05)) {
    statement = "lekcja";
  }
  */
  for(; i < 13.15; i += 0.55) {
    j = i + 0.45
    if (current > i && current < j) {
      statement = "Lekcja";
    }
  }
  
  return <div className="currentlesson">{statement}</div>

}

export default Currentlesson
