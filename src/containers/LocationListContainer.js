import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
//sirve para conectar react y redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    
    componentDidMount(){

        const { setWeather, setSelectedCity, cities, city } = this.props;

        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectionLocation = city => {
		this.props.setSelectedCity(city);
    }
    
    render() {
        return (
            <LocationList cities={ this.props.citiesWeather } onSelectedLocation={ this.handleSelectionLocation }/>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({ 
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});
//exporta a LocationListContainer como un componente mejorado inyectado con nuevas propiedades
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);