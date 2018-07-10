import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData/WeatherData';

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div onClick={ onWeatherLocationClick }>
        <Location city={ city }/>
        { data ? <WeatherData data={ data }/> : 'cargando...' }
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation;