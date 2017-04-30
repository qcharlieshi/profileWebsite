/**
 * Created by CharlieShi on 2/16/17.
 */


import React, {Component} from 'react';
import {Route, Link, Redirect} from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';

import HomeContainer from './HomeContainer';
import PortfolioContainer from './PortfolioContainer';
import AboutContainer from './AboutContainer';

import { throttle } from '../utils/throttle';

export default class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentScroll: 0
    }

    this.handleScroll = throttle(this.handleScroll.bind(this), 10);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState(() => {
      return {currentScroll: window.scrollY}
    })
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        <div className="row">
          <NavbarComponent scroll={this.state.currentScroll} pathname={this.props.location.pathname} />
        </div>

        {/*scroll={this.state.currentScroll}*/}
        <div className="row">
          <Route path="/home"  render={() => <HomeContainer scroll={this.state.currentScroll} /> } />
          <Route path="/portfolio" component={PortfolioContainer} />
          <Route path="/about" component={AboutContainer} />

          <Redirect to="/home" />
        </div>
      </div>
    )
  }
}

