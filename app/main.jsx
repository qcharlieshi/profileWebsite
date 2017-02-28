'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, IndexRoute, browserHistory, hashHistory} from 'react-router';
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import AppContainer from './components/AppContainer'
import ParallaxContainer from './containers/ParallaxContainer';

import Login from './components/LoginComponents/Login'
import WhoAmI from './components/LoginComponents/WhoAmI'


render (
    <Provider store={store}>
    <Router history={hashHistory}>

      <Route path="/" component={AppContainer}>
          <Route path="/parallax" component={ParallaxContainer} />

      </Route>


    </Router>
    </Provider>,
  document.getElementById('main')
);


//<IndexRoute component={ParallaxContainer}/>