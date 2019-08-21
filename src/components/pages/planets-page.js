import React, { Component } from 'react';
import Row from '../row';

import { 
  PlanetList,
  PlanetDetails
} from '../sw-components';

export default class PlanetsPage extends Component {

  state = {
    selectedPlanetId: null,
  }

  onItemSelected = (id) => {
    this.setState({
      selectedPlanetId: id
    });
  }

  render() {
    const { selectedPlanetId } = this.state;

    return (
      <Row 
        left={<PlanetList onItemSelected={this.onItemSelected}/>}
        right={<PlanetDetails itemId={selectedPlanetId} />}
      />
    );
  }
}