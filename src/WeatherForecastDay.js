import React from "react";
import WeatherIcon from "./WeatherIcon";


/**
 * This code defines a React component called `WeatherForecastDay` that displays the weather forecast for a single day.
 * It uses the `WeatherIcon` component to display the weather icon based on the weather code provided as a prop.
 *
 * @param {Object} props - An object containing the weather data for a single day, including the maximum and minimum temperature and the weather code.
 * @returns {JSX.Element} - JSX element representing the weather forecast for a single day, including the day of the week, weather icon, and temperature.
 */
export default function WeatherForecastDay(props) {
  /**
   * Calculates and returns the maximum temperature for the day.
   *
   * @returns {string} - The maximum temperature rounded to the nearest whole number with a degree symbol.
   */
  function maxTemperature() {
    const temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  /**
   * Calculates and returns the minimum temperature for the day.
   *
   * @returns {string} - The minimum temperature rounded to the nearest whole number with a degree symbol.
   */
  function minTemperature() {
    const temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  /**
   * Calculates and returns the day of the week for the forecasted day.
   *
   * @returns {string} - The day of the week.
   */
  function day() {
    const date = new Date(props.data.dt * 1000);
    const day = date.getDay();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max">{maxTemperature()}</span>
        <span className="WeatherForecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}