/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import AboutPage from "./AboutPage";
import FuelSavingsPage from "./containers/FuelSavingsPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import PrivateRoute from './PrivateRoute';
import ProtectedPage from './ProtectedPage';
import _ from 'lodash';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    }
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', _.debounce(() => this.updateDimensions, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    console.log('...width',this.state )
    return (
      <div>
        {/* <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div> */}
        <Switch>
          <Route exact path="/" component={HomePage} history={this.props.history} width={this.state.width}/>
          <PrivateRoute path='/stories'>
            <ProtectedPage width={this.state.width}/>
          </PrivateRoute>
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
