/**
 * Created by CharlieShi on 2/16/17.
 */


import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';

import HomeContainer from './HomeContainer';
import PortfolioContainer from './PortfolioContainer';

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    }


    render() {
      console.log('inside app container')
        return (
            <div id="main" className="container-fluid">
                <div className="row">
                    <NavbarComponent pathname={this.props.location.pathname} />
                </div>

                <div className="row">
                  { (this.props.location.pathname === "/home") ?
                  <Route path="/home" component={HomeContainer} /> :
                  <Route path="/portfolio" component={PortfolioContainer} /> }
                </div>
            </div>
        )
    }
}

