/**
 * Created by CharlieShi on 2/16/17.
 */


import React, {Component} from 'react';
import {Route, Link, Redirect} from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';

import HomeContainer from './HomeContainer';
import PortfolioContainer from './PortfolioContainer';

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        //Route Switch



        return (
            <div id="main" className="container-fluid">
                <div className="row">
                    <NavbarComponent pathname={this.props.location.pathname} />
                </div>

                <div className="row">
                  <Route path="/home" component={HomeContainer} />
                  <Route path="/portfolio" component={PortfolioContainer} />
                  <Redirect to="/home" />


                </div>
            </div>
        )
    }
}

