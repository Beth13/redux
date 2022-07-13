import React from "react";
import { connect } from "react-redux";
import WeatherItem from "./WeatherItem";
import * as weatherActions from "./weather.actions";
import { weatherDataSelector } from "./weather.selectors";

const Weather = ({ getWeatherList, weatherDataList }) => {
  getWeatherList();

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherDataList.map((weatherDataItem) => (
          <WeatherItem
            name={weatherDataItem.name}
            temperature={weatherDataItem.temperature}
            key={weatherDataItem.id}
          />
        ))}
      </ul>
    </main>
  );
};

const mapState = (state) => {
  return {
    weatherDataList: weatherDataSelector(state),
  };
};

const mapDispatch = {
  getWeatherList: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
