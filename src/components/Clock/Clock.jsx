import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(Date(Date.now()));

    useEffect(() => {
      const interval = setInterval(() => setTime(Date(Date.now())), 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="text-5xl font-extrabold ...">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          {time.toString()}
        </span>
      </div>
    );
}

export default Clock