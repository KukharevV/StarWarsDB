import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import {
  SwapiServiceProvider,
} from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage } from '../pages';
import { StarshipDetails } from '../sw-components';
import ErrorBoundry from '../error-boundry';



export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    isLoggedIn: false
  }

  renderPersons = ({ name, gender }) => {
    return (
      <span>
        {name}
        <span className='badge badge-success'>{gender}</span>
      </span>
    );
  }

  onLoggenIn = () => {
    this.setState({ isLoggedIn: true });
  }

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className='container'>
              <Header />
              <RandomPlanet />

              <Switch>
                <Route path="/" exact render={() => {
                  return <h2>Welcome to StarDB!</h2>;
                }} />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route path="/starships/:id" render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />
                }} />
                <Route path="/login" render={() => {
                  return <LoginPage isLoggedIn={this.state.isLoggedIn}
                    onLoggedIn={this.onLoggenIn} />
                }} />
                <Route path="/secret" render={() => {
                  return <SecretPage isLoggedIn={this.state.isLoggedIn} />
                }} />

                <Route render={() => {
                  return <h2>Page not found</h2>
                }} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};