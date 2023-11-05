import "../currentweather/current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`../src/assets/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}ºF
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {Math.round(data.wind.speed)}mph
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {Math.round(data.main.pressure)}hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
