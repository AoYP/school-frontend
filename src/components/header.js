import React, { useState, useEffect } from "react";
import '../css/header.css'

function Header() {
  const monthNames = ["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]
  const today = new Date();

  let hour = today.getHours();
  if(hour < 10) hour = '0' + hour

  let minutes = today.getMinutes();
  if(minutes < 10) minutes = '0' + minutes

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

  return (
    <div className='header-content'>
      <div className='logo'>ZS1MM</div>

      <div className='date'>
        <div className='title'>{currentTime}</div>
        <div className='subtitle'>{date}</div>
      </div>

      <div className='lesson'>
        <div className='title'>3 lekcja</div>
        <div className='subtitle'>9:50 - 10:35</div>
      </div>
    </div>
  )
}

export default Header
