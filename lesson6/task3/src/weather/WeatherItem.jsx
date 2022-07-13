import React from "react";

const WeatherItem = ({ name, id, temperature }) => {
  return (
    <li key={id} className="city">
      <span className="city__name">{name}</span>
      <span className="city__temperature">{temperature}</span>
    </li>
  );
};

export default WeatherItem;
