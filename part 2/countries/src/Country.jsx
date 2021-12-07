import React from "react";
import { v4 as uuidv4 } from "uuid";
import CountryDetails from "./CountryDetails";

const Country = ({
  country,
  handleSetCountryToShow,
  countryToShow,
  handleShowDetails,
  showDetails,
}) => {
  const handleCountryClick = (country) => {
    handleSetCountryToShow(country);
    handleShowDetails();
    console.log(showDetails);
  };

  return (
    <div className="countryComponent">
      {showDetails ? (
        <CountryDetails country={countryToShow} />
      ) : (
        <li key={uuidv4()}>
          <h2> {country.name?.common}</h2>
          <button onClick={() => handleCountryClick(country)}>Show</button>
        </li>
      )}
    </div>
  );
};

export default Country;
