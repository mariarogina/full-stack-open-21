import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherWidget from "./WeatherWidget";

const CountryDetails = ({ country }) => {
  const newApiKey = process.env.REACT_APP_API_KEY.replace(/['"]+/g, "");

  const [apiResponse, setApiResponse] = useState("");
  const weatherCity = country?.capital[0];

  useEffect(() => {
    console.log("effect");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&units=metric&appid=${newApiKey}`
      )
      .then(
        (response) => {
          console.log("promise fulfilled");
          setApiResponse(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div>
      <h2> {country.name?.common}</h2>
      <p>
        <b>Capital: </b>
        {country.capital[0]}
      </p>
      <p>
        <b>Population:</b> {country?.population}
      </p>

      <h4>Languages:</h4>
      <ul>
        {Object.values(country?.languages).map((language) => {
          return <li key={uuidv4()}>{language}</li>;
        })}
      </ul>
      <br />
      <img className="flag" src={country?.flags.png} alt="flag" />

      <WeatherWidget apiResponse={apiResponse} />
    </div>
  );
};

export default CountryDetails;
