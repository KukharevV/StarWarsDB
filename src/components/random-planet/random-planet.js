import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState( {
      planet, 
      loading: false
    });
  };

  onError = (err) => {
    this.setState({
        error: true,
        loading: false
      }
    );
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 18 + 2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }



  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className='row random-planet jumbotron rounded'>
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population,
    rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <div className='col-sm-3'>
        <img className='planet-img rounded' 
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='planet'/>
      </div>
      
      <div className='col-sm-6'>
        <ul className='list-group'>
          <h4 className='planet-name'>{name}</h4>
          <li className='list-group-item'>
            <span>Population: </span>
            <span>{population}</span>
          </li>
          <li className='list-group-item'>
            <span>Rotation Period: </span>
            <span>{rotationPeriod}</span>
          </li>
          <li className='list-group-item'>
            <span>Diameter: </span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
    
  );
};