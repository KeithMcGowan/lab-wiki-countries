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
    });

    // console.log(countryCodes);

    return (
      <div>
        <h2>
          <strong>{theCountry.name.common}</strong>
        </h2>
        <hr />
        <div className="country-details">
          <p>Capital</p> <p className="details">{theCountry.capital[0]}</p>
        </div>
        <hr />
        <div className="country-details">
          <p>Area</p>{' '}
          <p className="details">
            {theCountry.area} km<sup>2</sup>
          </p>
        </div>
        <hr />
        <p>Borders</p>
        {theCountry.borders.map((border) => {
          return (
            <div className="borders" key={border}>
              <ul>
                <li>
                  <Link to={`/countries/${border}`}>
                    {countryCodes[border]}
                  </Link>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountryDetails;
