import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        {this.props.countries.map((country) => {
          return <p key={country.cca3}><Link to={"/countries/"+country.cca3}> <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt="Country Flag" /> {" "}{country.name.common}</Link></p>
        })}
      </div>
    );
  }
}

export default Navbar;
