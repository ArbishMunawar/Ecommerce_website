import React from 'react'
import { useEffect, useState } from 'react'
const Timer = ({duration}) => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
      });
    
      const deadline = new Date("May 31, 2025").getTime();
    
      const updateTime = () => {
        const now = Date.now();
        const timeDiff = deadline - now;
    
        if (timeDiff > 0) {
          setTimeLeft({
            days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
            mins: Math.floor((timeDiff / (1000 * 60)) % 60),
            secs: Math.floor((timeDiff / 1000) % 60),
          });
        } else {
          setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 }); 
        }
      };
    
      useEffect(() => {
        updateTime(); 
        const interval = setInterval(updateTime, 1000);
    
        return () => clearInterval(interval); 
      }, []);
  return (
   <>
   <div className="flex items-center gap-2">
  <div className="text-center">
    <h2 className="font-semibold text-2xl bg-[#F3F5F7] rounded px-3 py-2">
      {timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}
    </h2>
    <p className="text-[0.7rem] text-gray-500">Days</p>
  </div>


  <div className="text-center">
    <h2 className="font-semibold text-2xl bg-[#F3F5F7] rounded px-3 py-2">
      {timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}
    </h2>
    <p className="text-[0.7rem] text-gray-500">Hours</p>
  </div>


  <div className="text-center">
    <h2 className="font-semibold text-2xl bg-[#F3F5F7] rounded px-3 py-2">
      {timeLeft.mins < 10 ? "0" + timeLeft.mins : timeLeft.mins}
    </h2>
    <p className="text-[0.7rem] text-gray-500">Minutes</p>
  </div>


  <div className="text-center">
    <h2 className="font-semibold text-2xl bg-[#F3F5F7] rounded px-3 py-2">
      {timeLeft.secs < 10 ? "0" + timeLeft.secs : timeLeft.secs}
    </h2>
    <p className="text-[0.7rem] text-gray-500">Seconds</p>
  </div>
</div>

   </>

  )
}

export default Timer