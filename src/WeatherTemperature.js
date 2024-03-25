import React, {useState} from "react";

/**
 * Displays the temperature in either Celsius or Fahrenheit.
 * @param {Object} props - The component props.
 * @param {number} props.celsius - The temperature value in Celsius.
 * @returns {JSX.Element} - JSX code to display the temperature.
 */
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  /**
   * Handles the click event when the user wants to see the temperature in Fahrenheit.
   * @param {Event} event - The click event.
   */
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  /**
   * Handles the click event when the user wants to see the temperature in Celsius.
   * @param {Event} event - The click event.
   */
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  /**
   * Calculates the temperature in Fahrenheit based on the Celsius value passed as a prop.
   * @returns {number} - The temperature in Fahrenheit.
   */
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">
        °C | {" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    </div>
  );
}
