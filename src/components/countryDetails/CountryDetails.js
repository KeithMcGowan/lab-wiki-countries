import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  render() {
    const theCountry = this.props.countries.find((country) => {
      return country.cca3 === this.props.match.params.code;
    });

    const countryCodes = [];

    this.props.countries.forEach((eachCountry) => {
        countryCodes[eachCountry.cca3] = eachCountry.name.common;
    })

    // console.log(countryCodes);

    return (
      <div>
        <h1>{theCountry.name.common}</h1>
        <p>Capital: {theCountry.capital[0]}</p>
        <p>Area: {theCountry.area} km2</p>

        {theCountry.borders.map((border) => {
          return (
            <div key={border}>
              <Link to={`/countries/${border}`}>{countryCodes[border]}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountryDetails;
