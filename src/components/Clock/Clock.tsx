import React, { useState, useEffect } from "react";


interface ClockProps {
  timeType?: 'long' | 'short'
}

const Clock = ({timeType='short'}:ClockProps) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);  

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="text-5xl font-extrabold ...">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          {timeType == "long" && time.toString()}
          {timeType == "short" && time.toUTCString()}
        </span>
      </div>
    );
}

export default Clock