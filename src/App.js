import './App.css';
import Navbar from './components/navbar/Navbar';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './components/countryDetails/CountryDetails';

function App() {
  // console.log(countries);
  return (
    <div className="App">
      <h1>WikiCountries</h1>
      <div className="country-info">
        <div className="left">
          <Navbar countries={countries} />
        </div>
        <div className="right">
          <Switch>
            <Route
              exact
              path="/countries/:code"
              render={(props) => {
                return <CountryDetails {...props} countries={countries} />;
              }}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
