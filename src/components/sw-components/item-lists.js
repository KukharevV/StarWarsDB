import React from 'react';
import ItemList from '../item-list';

import {
  withSwapiService,
  withData
} from '../hoc-helpers';

const withChildFunction = (Wrapped, func) => {
  return (props) => {
    return (
      <Wrapped {...props} >
        {func}
      </Wrapped>
    );
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const mapPersonMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};

const mapPlanetMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};

const mapStarshipMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};




const PersonList = withSwapiService(
                      withData(
                        withChildFunction(ItemList, renderName)),
                    mapPersonMethodToProps);

const PlanetList = withSwapiService(
                      withData(
                        withChildFunction(ItemList, renderName)),
                      mapPlanetMethodToProps);
  
const StarshipList = withSwapiService(
                    withData(
                      withChildFunction(ItemList, renderName)),
                    mapStarshipMethodToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};

