/**
 * Created by CharlieShi on 2/24/17.
 */

import React, { Component } from 'react';
import {Router, Route, IndexRedirect, IndexRoute, browserHistory, hashHistory, Link} from 'react-router-dom';

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   navbarstyle: {position: 'static'}
    //   currentScroll: this.props.currentScroll
    // }

    this.state = {
      position: 'static'
    }
  }

  componentWillReceiveProps() {
    this.handleScroll();
  }

  handleScroll() {
    //Set navbar to fixed once it reaches a certain point on each page
    if (this.props.pathname === '/home') {
      if (this.props.scroll > 450) this.setState({position: 'fixed' });
      else this.setState(() => {return {position: 'static' }});
    }

    // if (this.props.pathname === '/portfolio') {
    //   if (this.props.currentScroll > 450) this.refs.navbarComponent.style.position = 'fixed';
    //   else this.refs.navbarComponent.style.position = 'static';
    // }
  }

  toggleColors() {
    let backgroundColorHome, backgroundColorPortfolio, backgroundColorBlog, backgroundColorAbout;

    let defaultColor = '#1D2731';

    switch (this.props.pathname) {
      case '/home':
        backgroundColorHome = '#328CC1';
        backgroundColorPortfolio = defaultColor;
        backgroundColorBlog = defaultColor;
        backgroundColorAbout = defaultColor;
        break;
      case '/portfolio':
        backgroundColorPortfolio = '#D9B310';

        backgroundColorHome = defaultColor;
        backgroundColorBlog = defaultColor;
        backgroundColorAbout = defaultColor;
        break;
      case '/blog':
        backgroundColorBlog = '#5d8209';

        backgroundColorHome = defaultColor;
        backgroundColorPortfolio = defaultColor;
        backgroundColorAbout = defaultColor;
        break;
      case '/about':
        backgroundColorAbout = '#ad3f0c';

        backgroundColorHome = defaultColor;
        backgroundColorPortfolio = defaultColor;
        backgroundColorBlog = defaultColor;
        break;
    }

    return { backgroundColorHome, backgroundColorPortfolio, backgroundColorBlog, backgroundColorAbout}
  }

  render() {
    //Dynamiclly Set background tab colors
    let backgroundColors = this.toggleColors();

    let styleHome = { backgroundColor: backgroundColors.backgroundColorHome};
    let stylePortfolio = { backgroundColor: backgroundColors.backgroundColorPortfolio};
    let styleBlog = { backgroundColor: backgroundColors.backgroundColorBlog};
    let styleAbout = { backgroundColor: backgroundColors.backgroundColorAbout};

    const glyphiconStyle = {
      fontSize: '20px',
      verticalAlign: '10px',
      paddingRight: '10px'
    };

    return (
      <div className ="navContainer highlightTextIn" style={{...this.state}}>
        <Link to="/home" style={styleHome}><span className="glyphicon glyphicon-home" style={glyphiconStyle} />HOME</Link>
        <Link to="/portfolio" style={stylePortfolio}><span className="glyphicon glyphicon-picture" style={glyphiconStyle} />PORTFOLIO</Link>
        <Link to="/blog" style={styleBlog}><span className="glyphicon glyphicon-list-alt" style={glyphiconStyle} />BLOG</Link>
        <Link to="/about" style={styleAbout}><span className="glyphicon glyphicon-user" style={glyphiconStyle} /> ABOUT</Link>
      </div>
    )
  }
}
