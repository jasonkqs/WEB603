import React, { Component } from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider, connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

// Data
const COUNTRIES = [
  {
    country: "Italy",
    id: 0,
    visited: "Yes",
    year: "2012",
  },
  {
    country: "Japan",
    id: 1,
    visited: "No",
    year: "2025",
  },
  {
    country: "Chile",
    id: 2,
    visited: "No",
    year: "2026",
  },
];

const CountriesList = (props) => {
  return (
    <>
      {props.countries.map((row) => (
        <tr key={row.id}>
          <td className="w-25 px-2 text-center">{row.country}</td>
          <td className="w-25 px-2 text-center">{row.visited}</td>
          <td className="w-25 px-3 text-center">{row.year}</td>
        </tr>
      ))}
    </>
  );
};

// REDUCER
const countriesSlice = createSlice({
  name: "countries",
  initialState: COUNTRIES,
  reducers: {
    addCountry: (state, action) => {
      state.push({ ...action.payload, id: state.length });
    },
  },
});

const { addCountry } = countriesSlice.actions;

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
  },
});

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCountry: (country, visited, year) => {
      dispatch(addCountry({ country, visited, year }));
    },
  };
};

// 1st Child Component
class AddCountry extends React.Component {
  state = { country: "", visited: "", year: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCountry(
      this.state.country,
      this.state.visited,
      this.state.year
    );
    this.setState({ country: "", visited: "", year: "" }); // Reset form
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mx-3">
        <label htmlFor="country">Country</label>
        <input
          id="country"
          type="text"
          value={this.state.country}
          onChange={this.handleChange}
          className="d-block mb-2"
        />
        <label htmlFor="visited">Visited?</label>
        <input
          id="visited"
          type="text"
          value={this.state.visited}
          onChange={this.handleChange}
          className="d-block mb-2"
        />
        <label htmlFor="year">Year Visited / To Visit</label>
        <input
          id="year"
          type="text"
          value={this.state.year}
          onChange={this.handleChange}
          className="d-block mb-3"
        />
        <button type="submit">Add Country</button>
      </form>
    );
  }
}

// Main Component
class Main extends React.Component {
  render() {
    return (
      <div className="p-3">
        <h1 className="text-danger">My Travel Plans</h1>
        <hr />
        <AddCountry addCountry={this.props.addCountry} />
        <hr />
        <div className="mx-2 py-3">
          <table className="table table-striped ">
            <thead className="table-primary">
              <tr>
                <th className="w-25 px-2 text-center">Country</th>
                <th className="w-25 px-2 text-center">Visited</th>
                <th className="w-25 px-3 text-center">Year</th>
              </tr>
            </thead>
            <tbody>
              <CountriesList countries={this.props.countries} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const AppExtended = connect(mapStateToProps, mapDispatchToProps)(Main);

const App = () => (
  <Provider store={store}>
    <AppExtended />
  </Provider>
);

export default App;