import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import CountryDetails from "./CountryDetails";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(["start"]);
  const [countryToShow, setCountryToShow] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
      console.log(countries);
    });
  }, []);

  const handleFilterCountries = (e) => {
    setShowDetails(false);
    setCountryToShow({});
    e.preventDefault();
    console.log(searchString);
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchString.toLowerCase())
    );
    console.log(filteredCountries);
    setFilteredCountries(filteredCountries);
  };

  const handleSetCountryToShow = (country) => {
    setCountryToShow(country);
  };

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <p>Filter countries with</p>
      <form onSubmit={(e) => handleFilterCountries(e)}>
        <input type="text" onChange={(e) => setSearchString(e.target.value)} />
      </form>
      {filteredCountries.includes("start") ? (
        <p>Start the search</p>
      ) : !filteredCountries.length ? (
        <p>Nothing found</p>
      ) : filteredCountries.length === 1 ? (
        <CountryDetails country={filteredCountries[0]} />
      ) : filteredCountries.length > 10 ? (
        <p>Too much countries found</p>
      ) : showDetails ? (
        <CountryDetails country={countryToShow} />
      ) : (
        filteredCountries.map((country) => {
          return (
            <ul className="filteredCountries">
              <Country
                country={country}
                handleSetCountryToShow={handleSetCountryToShow}
                countryToShow={countryToShow}
                handleShowDetails={handleShowDetails}
                showDetails={showDetails}
              />
            </ul>
          );
        })
      )}{" "}
    </div>
  );
};
export default CountriesList;
