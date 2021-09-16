import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";

const TodaysHighlights = ({ data }) => {
  const { current, forecast } = data;
  const [weatherCards, setWeatherCards] = useState();
  const [cards, setCards] = useState();

  useEffect(() => {
    setWeatherCards(document.querySelector(".weather-cards"));
    setCards(Array.from(document.querySelectorAll(".card")));
  }, []);

  //ANCHOR Cards loop function
  function cardsLoop() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    cards.forEach((ele, i) => {
      if (ele.classList.contains("active")) {
        weatherCards.style.left = `${-cardWidth * i}px`;
      }
    });
  }

  //ANCHOR Slide functions

  function slidRight() {
    const active = document.querySelector(".card.active");
    if (active.nextElementSibling) {
      active.nextElementSibling.classList.add("active");
      active.classList.remove("active");
      cardsLoop();
    }
  }

  function slideLeft() {
    const active = document.querySelector(".card.active");
    if (active.previousElementSibling) {
      active.previousElementSibling.classList.add("active");
      active.classList.remove("active");
      cardsLoop();
    }
  }

  return (
    <section className="today-highlights">
      <h2 className="headTitle">today's higlights</h2>

      <div className=" weather-container">
        <div className="weather-cards">
          {/* ANCHOR UV Card */}
          <div className="card uv active">
            <h3 className="cardHeader">UV index</h3>
            <div className="card-container">
              <div className="circle">
                <CircularProgressbar
                  value={current.uv}
                  maxValue={12}
                  text={`${current.uv}`}
                  styles={buildStyles({
                    pathColor:
                      current.uv <= 2
                        ? "#55d284"
                        : current.uv <= 5
                        ? "#ffdd00"
                        : current.uv <= 7
                        ? "#fbd72b"
                        : current.uv <= 10
                        ? "#f9484a"
                        : "#de4daa",
                  })}
                />
              </div>
            </div>
          </div>

          {/*ANCHOR Wind Card */}
          <div className="card wind">
            <h3 className="cardHeader">wind status</h3>
            <div className="card-container">
              <div className="wind-speed">
                <h2>
                  {current.wind_kph} <span> km/h</span>
                </h2>
              </div>
              <div className="wind-direction">
                <img
                  src="./images/icons/compass.png"
                  alt="wind direction"
                  title="wind direction"
                />
                <h3>{current.wind_dir}</h3>
              </div>
            </div>
          </div>

          {/* ANCHOR Sun Card */}
          <div className="card sunContainer">
            <h3 className="cardHeader">rise & set</h3>

            <div className="card-container">
              <div className="sunAction">
                <div className="sun rise">
                  <div className="imgContainer">
                    <img
                      src="./images/icons/sunrise.png"
                      alt="sunrise"
                      title="sunrise"
                    />
                  </div>
                  <div className="time">
                    <h2>{forecast.forecastday[0].astro.sunrise}</h2>
                  </div>
                </div>
                <div className="sun set">
                  <div className="imgContainer">
                    <img
                      src="./images/icons/sunset.png"
                      alt="sunset"
                      title="sunset"
                    />
                  </div>
                  <div className="time">
                    <h2>{forecast.forecastday[0].astro.sunset}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ANCHOR Humidity Card */}
          <div className="card humidity ">
            <h3 className="cardHeader">humidity</h3>
            <div className="card-container">
              <img
                src="./images/icons/dew-point.png"
                alt="humidity"
                title="humidity"
              />
              <h2>
                {current.humidity} <span>%</span>
              </h2>
            </div>
          </div>

          {/*ANCHOR Visibility Card */}
          <div className="card visibility ">
            <h3 className="cardHeader">visibility</h3>

            <div className="card-container">
              <img
                src="./images/icons/low-visibility.png"
                alt="visibility"
                title="visibility"
              />
              <h2>
                {current.vis_km} <span>km</span>
              </h2>
            </div>
          </div>

          {/* ANCHOR Gust Card */}
          <div className="card gust ">
            <h3 className="cardHeader">gust status</h3>
            <div className="card-container">
              <img
                src="./images/icons/gust.png"
                alt="gust speed"
                title="gust speed"
              />
              <h2>
                {current.gust_kph} <span> km/h</span>
              </h2>
            </div>
          </div>
        </div>
        <div id="rightArrow" className="right-arrow" onClick={slidRight}>
          <i className="fas fa-caret-right"></i>
        </div>
        <div id="leftArrow" className="left-arrow" onClick={slideLeft}>
          <i className="fas fa-caret-left"></i>
        </div>
      </div>
    </section>
  );
};

export default TodaysHighlights;
