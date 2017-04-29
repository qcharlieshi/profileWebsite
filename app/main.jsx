'use strict'
import React from 'react';
import {Router, Route, BrowserRouter, HashRouter} from 'react-router-dom';
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import AppContainer from './containers/AppContainer'

// import HomeContainer from './containers/HomeContainer';
// import PortfolioContainer from './containers/PortfolioContainer';
//
// import Login from './components/LoginComponents/Login'
// import WhoAmI from './components/LoginComponents/WhoAmI'

render (
    <Provider store={store}>
      <HashRouter>
        <Route path="/" component={AppContainer} />
      </HashRouter>
    </Provider>,
  document.getElementById('main')
);
