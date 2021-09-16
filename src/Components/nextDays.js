const NextDays = ({ data, days, celsius }) => {
  const { forecastday } = data;

  return (
    <section className="next-days">
      {forecastday.map((forecastDay) => {
        const { day, date_epoch, date } = forecastDay;
        const weekDay = days[new Date(date).getDay()];
        return (
          <div className="day" key={date_epoch}>
            <h4 className="name">{weekDay}</h4>
            <div className="status-img">
              <img
                src={`./images/weather/day/${day.condition.code}.png`}
                alt={day.condition.text}
                title={day.condition.text}
              />
            </div>
            <div className="temperature-degree">
              <h4 className="max">
                {celsius
                  ? `${Math.round(day.maxtemp_c)}°`
                  : `${Math.round(day.maxtemp_f)}°`}
              </h4>
              <h4 className="min">
                {celsius
                  ? `${Math.round(day.mintemp_c)}°`
                  : `${Math.round(day.mintemp_f)}°`}
              </h4>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default NextDays;
