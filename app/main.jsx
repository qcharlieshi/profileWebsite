'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, IndexRoute, browserHistory, hashHistory} from 'react-router';
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import AppContainer from './containers/AppContainer'
import HomeContainer from './containers/HomeContainer';

import ParallaxTwoContainer from './containers/ParallaxTwoContainer';
import ParallaxExplanationContainer from './containers/ParallaxExplanationContainer';

import Login from './components/LoginComponents/Login'
import WhoAmI from './components/LoginComponents/WhoAmI'


render (
    <Provider store={store}>
    <Router history={hashHistory}>

      <Route path="/" component={AppContainer}>
          <IndexRedirect to="/home" />
          <Route path="/home" component={HomeContainer} />


          <Route path="/parallax" component={ParallaxTwoContainer} />
          <Route path="/parallaxexplain" component={ParallaxExplanationContainer} />

      </Route>


    </Router>
    </Provider>,
  document.getElementById('main')
);


//<IndexRoute component={ParallaxContainer}/>