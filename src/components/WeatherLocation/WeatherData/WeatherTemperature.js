import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, CLOUDY, RAIN, SUN, SNOW, WINDY, THUNDER, DRIZZLE } from './../../../constants/weathers';
import PropTypes from 'prop-types';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case RAIN:
            return "rain";
        case SUN:
            return "day-sunny";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        case THUNDER:
            return "day-thunderstorm";
        case DRIZZLE:
            return "day-showers";
        default:
            return "umbrella";
    }
}

const getWeatherIcon = weatherState => {
    return(
        <WeatherIcons name ={stateToIconName(weatherState)} size="2x"/>
    );
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span> {`${temperature} C`} </span>
    </div>

);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;