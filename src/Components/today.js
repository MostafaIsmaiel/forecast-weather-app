import { useState, useEffect } from "react";
import FirstView from "./firstView";

const Today = ({
  data,
  days,
  updateCity,
  celsius,
  currentLocation,
  lat,
  lng,
}) => {
  const { location, current, forecast } = data;
  const day = days[new Date().getDay()];
  const time = current.last_updated;
  const [isDay, setIsDay] = useState("");
  const [update, setUpdate] = useState(0);
  const lastUpdated =
    (new Date().getTime() - new Date(time).getTime()) / 1000 / 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate(lastUpdated);
    }, 20000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (current.is_day === 1) {
      setIsDay("day");
    } else {
      setIsDay("night");
    }
  }, [current.is_day]);

  return (
    <section className="today">
      <FirstView
        updateCity={updateCity}
        currentLocation={currentLocation}
        lat={lat}
        lng={lng}
      />

      {/*ANCHOR Today's weather */}

      <section className="today-weather">
        <div className="current">
          <img
            src={`./images/weather/${isDay}/${current.condition.code}.png`}
            alt={current.condition.text}
            title={current.condition.text}
            className="today-status-img"
          />
          <div className="current-temp-container">
            <h2 className="current-temp">
              {celsius
                ? `${Math.round(current.feelslike_c)}`
                : `${Math.round(current.feelslike_f)}`}
            </h2>
            <span>{celsius ? "°C" : "°F"}</span>
          </div>
        </div>

        <div className="date-container">
          <h3 className="date">{day}</h3>
          <h3 className="time">
            Updated {Math.trunc(update) || Math.trunc(lastUpdated)}{" "}
            {Math.trunc(update) === 1 ? "minut" : "minuts"} ago
          </h3>
        </div>

        <div className="prediction">
          <div className="air-status">
            <img
              src="./images/icons/cloud.png"
              alt={current.condition.text}
              title={current.condition.text}
            />
            <h4>{current.condition.text}</h4>
          </div>
          <div className="weather-status">
            <img
              src="./images/icons/rain.png"
              alt="rain possibility"
              title="rain possibility"
            />
            <h4>
              Rain -
              <span> {forecast.forecastday[0].day.daily_chance_of_rain}%</span>
            </h4>
          </div>
        </div>
        <div className="search-result">
          <h3>
            {location.country}, {location.name}
          </h3>
        </div>
      </section>
    </section>
  );
};

export default Today;
