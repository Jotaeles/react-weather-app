import React, { Component } from 'react';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
	"Ciudad de México,mx",
	"Buenos Aires,ar",
	"Colombia,col"
];
class App extends Component {
	constructor(props) {
		super();
		this.state = { city: null };
	}

	handleSelectionLocation = city => {
		this.setState({ city })
		console.log(`handleSelectionLocation ${city}`);
	}
  	render() {
		const { city } = this.state; 
    	return (
      		<div className="App">
			  	<div className="col-50">
					<LocationList cities={ cities } onSelectedLocation={ this.handleSelectionLocation }/>
				</div>
				<div className="col-50">
					<div className="detail">
						{ 
							city &&
							<ForecastExtended city={ city }/>
						}
					</div>
				</div>
      		</div>
    	);
  	}
}

export default App;
