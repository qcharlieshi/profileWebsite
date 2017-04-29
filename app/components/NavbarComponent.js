/**
 * Created by CharlieShi on 2/24/17.
 */

import React, { Component } from 'react';
import {Router, Route, IndexRedirect, IndexRoute, browserHistory, hashHistory, Link} from 'react-router-dom';

import { throttle } from '../utils/throttle';

import HomeContainer from '../containers/HomeContainer';
import PortfolioContainer from '../containers/PortfolioContainer';

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      position: 'static'
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
    //Set navbar to fixed once it reaches a certain point on each page

    if (this.props.pathname === '/home') {
      if (window.scrollY > 450) this.setState(() => {return {position: 'fixed' }});
      else this.setState(() => {return {position: 'static' }});
    }

    if (this.props.pathname === '/portfolio') {
      if (window.scrollY > 450) this.refs.navbarComponent.style.position = 'fixed';
      else this.refs.navbarComponent.style.position = 'static';
    }

  }

  toggleColors() {

  }

  render() {
    let backgroundColorHome, backgroundColorPortfolio, backgroundColorBlog, backgroundColorAbout;
    console.log(this.props.pathname)
    switch (this.props.pathname) {
      case '/home':
        backgroundColorHome = '#328CC1';
        backgroundColorPortfolio = '#1D2731';
        break;
      case '/portfolio':
        backgroundColorPortfolio = '#D9B310';
        backgroundColorHome = '#1D2731';
        break;
      case '/blog':
        break;
      case '/about':
        break;
    }

    //dynamiclly set the navbar color based on the current pathname
    let styleHome = { backgroundColor: backgroundColorHome};
    let stylePortfolio = { backgroundColor: backgroundColorPortfolio};

    const glyphiconStyle = {
      fontSize: '20px',
      verticalAlign: '10px',
      paddingRight: '10px'
    };

    return (
      <div className ="navContainer highlightTextIn" style={{...this.state}}>
        <Link to="/home" style={styleHome}><span className="glyphicon glyphicon-home" style={glyphiconStyle} />HOME</Link>
        <Link to="/portfolio" style={stylePortfolio}><span className="glyphicon glyphicon-picture" style={glyphiconStyle} />PORTFOLIO</Link>
        <Link to="/blog"><span className="glyphicon glyphicon-list-alt" style={glyphiconStyle} />BLOG</Link>
        <Link to="/about"><span className="glyphicon glyphicon-user" style={glyphiconStyle} /> ABOUT</Link>
      </div>
    )
  }
}
