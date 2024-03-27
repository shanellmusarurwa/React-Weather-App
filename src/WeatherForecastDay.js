import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun","Mon","Tue","Wed","Thu","Frid","Sat"];

        return day[day];
    }
    return(
        <div>
             <div className="WeatherForecast-day">
                          {forecast[0].dt}
                    </div>
                    <WeatherIcon code={forecast[0].weather[0].icon} size={36}/>
                    <div className="WeatherForecast-temperatures">
                         <span className="WeatherForecast-max">{forecast[0].temp.max}°</span>
                         <span className="WeatherForecast-min">{forecast[0].temp.min}°</span>

                    </div>
        </div>
    );
}