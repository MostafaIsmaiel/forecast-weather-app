import Today from "./today";
import NextDays from "./nextDays";
import TodaysHighlights from "./todayHilights";
import Header from "./header";
import Error from "./error";
import Navigator from "./navigator";
import Loading from "./loading";
import FirstView from "./firstView";
import { useEffect, useState } from "react";

const Container = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [city, setCity] = useState("");
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=5`;
  const [data, setData] = useState([]);
  const [isC, setIsC] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isNav, setIsNav] = useState(false);
  const [navMessage, setNaveMessage] = useState("");
  const [isFirstView, setIsFirstView] = useState(true);
  const [dark, setDark] = useState("");
  const [toggle, setToggle] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const posittion = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let lng = pos.coords.longitude;
      setLat(lat);
      setLng(lng);
    });
  };

  // ANCHOR Fetching location name
  function fetchLocationName(lat, lng) {
    posittion();
    setIsLoading(true);
    setIsFirstView(false);
    if (lat && lng) {
      fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=5&appid=d4e738da245099affa60b9e7902e2557`
      )
        .then((res) => {
          if (res.status >= 200 && res.status <= 299) {
            return res.json();
          } else {
            throw Error("");
          }
        })
        .then((data) => {
          if (data[0].name) {
            setCity("");
            setCity(data[0].name);
          } else {
            setIsFirstView(true);
          }
        })
        .catch(() => {
          setIsFirstView(true);
          setIsLoading(false);
          setNaveMessage("Please enable your location");
          setIsNav(true);
          setTimeout(() => {
            setIsNav(false);
          }, 2000);
        });
    } else {
      setIsFirstView(true);
      setIsLoading(false);
      setNaveMessage("Please enable your location");
      setIsNav(true);
      setTimeout(() => {
        setIsNav(false);
      }, 2000);
    }
  }

  // ANCHOR Fetching data
  function fetchData(url) {
    setIsLoading(true);
    setIsFirstView(false);
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d89cc6705emsh6983c89f8aa44bcp1d3cc5jsnaa2af595bf47",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    })
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          throw Error("");
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setIsFirstView(false);
        if (data.current.is_day) {
          setDark("");
          setToggle(false);
        } else {
          setDark("dark");
          setToggle(true);
        }
      })
      .catch(() => {
        setIsFirstView(true);
        setErrorMessage("Can't find place, please try again.");
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 2000);
      });
  }

  useEffect(() => {
    city && fetchData(url);
    posittion();
  }, [city, url]);

  return (
    <main className={`main-container ${dark}`}>
      {isFirstView && (
        <FirstView
          updateCity={setCity}
          currentLocation={fetchLocationName}
          lat={lat}
          lng={lng}
        />
      )}
      {isError && (
        <Error
          isError={setIsError}
          isLoading={setIsLoading}
          errorMessage={errorMessage}
        />
      )}
      {isNav && (
        <Navigator
          setIsNav={setIsNav}
          isLoading={setIsLoading}
          navMessage={navMessage}
        />
      )}

      <section className="container">
        {isLoading && !isFirstView && <Loading />}

        {/* ANCHOR Today */}
        {!isLoading && !isFirstView && (
          <Today
            data={data}
            days={days}
            celsius={isC}
            updateCity={setCity}
            currentLocation={fetchLocationName}
            lat={lat}
            lng={lng}
          />
        )}

        {/* ANCHOR Week Forecast */}
        {!isLoading && !isFirstView && (
          <section className="forecast">
            <Header
              isC={setIsC}
              celsius={isC}
              toggle={toggle}
              setToggle={setToggle}
              setDark={setDark}
            />
            <NextDays data={data.forecast} days={days} celsius={isC} />
            <TodaysHighlights data={data} />
          </section>
        )}
      </section>
    </main>
  );
};

export default Container;
