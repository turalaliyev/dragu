import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import snowflake1 from "../images/dragu.png";
import snowflake2 from "../images/dragu.png";
import snowflake3 from "../images/dragu.png";

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);
  const maxSnowflakes = 20; // Maximum number of snowflakes

  useEffect(() => {
    const interval = setInterval(() => {
      if (snowflakes.length < maxSnowflakes) {
        const newSnowflake = {
          id: uuidv4(),
          img: getRandomSnowflake(),
          left: getRandomPosition(),
          duration: getRandomDuration(),
          size: getRandomSize(),
          drift: getRandomDrift(),
        };
        setSnowflakes((prevState) => [...prevState, newSnowflake]);
      }
    }, 2000); // Adjust the interval to control snowflake falling speed

    return () => clearInterval(interval);
  }, [snowflakes]); // Add snowflakes as dependency to ensure the interval respects changes in snowflakes array

  const getRandomSnowflake = () => {
    const snowflakes = [snowflake1, snowflake2, snowflake3];
    return snowflakes[Math.floor(Math.random() * snowflakes.length)];
  };

  const getRandomPosition = () => Math.random() * 90;

  const getRandomDuration = () => Math.random() * 20 + 5; // Adjust duration as needed

  const getRandomSize = () => Math.random() * 90 + 50; // Adjust size range as needed

  const getRandomDrift = () => Math.random() * 20 - 10; // Randomize the horizontal drift

  return (
    <div className="relative h-[50%]">
      {snowflakes.map((snowflake) => (
        <img
          key={snowflake.id}
          src={snowflake.img}
          alt="snowflake"
          className="absolute top-0 animate-snowfall"
          style={{
            left: `${snowflake.left}%`,
            animationDuration: `${snowflake.duration}s`,
            width: `${snowflake.size}px`,
            height: "auto",
            transform: `translateY(100vh) translateX(${snowflake.drift}px)`, // Apply random horizontal drift
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
