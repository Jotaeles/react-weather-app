import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData/WeatherData';
import transformWeather from './../../services/transformWeather';

const api_key = "28299e61afb78d7ef6595a7bf774999a";
const url = "http://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component {

    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null
        };
    }
    
    handleUpdateClick = () => {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;

        fetch(api_weather).then( data => {
            return data.json();
        }).then(weather_data =>{
            const data = transformWeather(weather_data);
            this.setState({ data })
        });
    }

    componentWillMount(){
        this.handleUpdateClick();
    }

    render = () => {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div onClick={ onWeatherLocationClick }>
                <Location city={ city }/>
                { data ? <WeatherData data={ data }/> : 'cargando...' }
            </div>
        )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;