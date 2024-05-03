import { useEffect, useState } from "react";

import "./Horloge.css";

const Quadrant = ({ time = Number, id = Number }) => {
  useEffect(() => {
    const divQuadrant = document.getElementById(`quadrant-${id}`);

    const translateYValue = `calc(-103.85% * ${time})`;

    divQuadrant.style.transition = "transform 0.3s ease";
    divQuadrant.style.transform = `translateY(${translateYValue})`;

    return () => {
      divQuadrant.style.transition = "";
    };
  }, [time, id]);

  return (
    <div
      id={`quadrant-${id}`}
      className="quadrant"
      style={{
        transform: `translateY(calc(-103.85% * ${time}))`,
      }}
    >
      <ul>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

function Horloge() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getFormattedTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return {
      hours: [hours[0], hours[1]],
      minutes: [minutes[0], minutes[1]],
      seconds: [seconds[0], seconds[1]],
    };
  }

  return (
    <section className="App">
      <div>
        <div className="horloge-container">
          <div className="horloge">
            <Quadrant time={currentTime.hours[0]} id={0} />
            <Quadrant time={currentTime.hours[1]} id={1} />
            <span>:</span>
            <Quadrant time={currentTime.minutes[0]} key={2} />
            <Quadrant time={currentTime.minutes[1]} id={3} />
            <span>:</span>
            <Quadrant time={currentTime.seconds[0]} id={4} />
            <Quadrant time={currentTime.seconds[1]} id={5} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Horloge;
