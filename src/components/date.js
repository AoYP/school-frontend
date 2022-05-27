import React, { useState, useEffect } from "react";

function Data () {
  const monthNames = ["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]
  const today = new Date();

  let hour = today.getHours();
  if(hour < 10) {hour = '0' + hour}

  let minutes = today.getMinutes();
  if(minutes < 10) {minutes = '0' + minutes}

  const currentTime = hour + ":" + minutes;
  const date = today.getDate() + " " + monthNames[today.getMonth()] + " " + today.getFullYear();

  const [time, setTime] = useState(currentTime)

  function refreshTime() {
    const now = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setTime(now)
  }

  useEffect(() => {
    setInterval(refreshTime, 1000)
  }, [time]);

  return(
    <div className="date">{currentTime}<br />{date}</div>
  )
}

export default Data