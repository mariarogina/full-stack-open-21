import React from "react";

const WeatherWidget = ({ apiResponse }) => {
  let compassSector = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
  ];

  const windDirection =
    compassSector[(apiResponse?.wind?.deg / 22.5).toFixed(0)];

  return (
    <div>
      <h2>Weather</h2>
      <p>Temperature: {apiResponse?.main?.temp}</p>
      <img
        src={`http://openweathermap.org/img/w/${
          apiResponse && apiResponse?.weather[0]?.icon
        }.png`}
        alt="weather now"
      />
      <p>
        Wind: {apiResponse?.wind?.speed} mph, direction:{windDirection}
      </p>
    </div>
  );
};

export default WeatherWidget;
