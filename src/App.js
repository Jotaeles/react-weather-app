import React, { Component } from 'react';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css';

const cities = [
	"Ciudad de México,mx",
	"Buenos Aires,ar",
	"Colombia,col"
];

class App extends Component {
  	render() {
    	return (
      		<div className="App">
			  	<div className="col-50">
					<LocationListContainer cities={ cities } />
				</div>
				<div className="col-50">
					<div className="detail">
						<ForecastExtendedContainer />
					</div>
				</div>
      		</div>
    	);
  	}
}

export default App;
