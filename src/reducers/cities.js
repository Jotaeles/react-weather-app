import toPairs from 'lodash.topairs';
import { SET_FORECAST_DATA, GET_WEATHER, SET_WEATHER } from './../actions';
import { createSelector } from 'reselect';

export const cities = ( state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const { city , forecastData } = action.payload;
            return { ...state, [city]: { ...state[city], forecastData, forecastDataDate: new Date() }};
        }
        case GET_WEATHER: {
            const city = action.payload;
            return { ...state, [city]: { ...state[city], weather: null }};
        }
        case SET_WEATHER: {
            const { city, weather } = action.payload;
            return { ...state, [city]: { ...state[city], weather }};
        }
        default:
            return state;
    }
}
//selector
export const getForecastDataFromCities = 
    createSelector((state,city) => state[city] && state[city].forecastData, forecastData => forecastData);

const fromObjectToArray = cities =>(toPairs(cities).map(([key, value]) => ({ key, name:key, data:value.weather }) ));
export const getWeatherCities = 
    createSelector(state => fromObjectToArray(state), cities => cities);