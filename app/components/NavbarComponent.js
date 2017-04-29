/**
 * Created by CharlieShi on 2/24/17.
 */

import React, { Component } from 'react';
import {Router, Route, IndexRedirect, IndexRoute, browserHistory, hashHistory, Link} from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';
import PortfolioContainer from '../containers/PortfolioContainer';

export default class NavbarComponent extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        let backgroundColorHome, backgroundColorPortfolio, backgroundColorBlog, backgroundColorAbout;

        switch (this.props.pathname) {
          case '/home':
            backgroundColorHome = '#328CC1';
            break;
          case '/portfolio':
            backgroundColorPortfolio = '#D9B310';
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
          <div className ="navContainer highlightTextIn">
            <Link to="/home"><a alt="HOME" href="/#/home" style={styleHome}><span className="glyphicon glyphicon-home" style={glyphiconStyle} />HOME</a></Link>
            <Link to="/portfolio"><a href="/#/portfolio" style={stylePortfolio}><span className="glyphicon glyphicon-picture" style={glyphiconStyle} />PORTFOLIO</a></Link>
            <a href="/#/blog"><span className="glyphicon glyphicon-list-alt" style={glyphiconStyle} />BLOG</a>
            <a href="/#/about"><span className="glyphicon glyphicon-user" style={glyphiconStyle} /> ABOUT</a>

            <Route path="/home" component={HomeContainer} />
            <Route path="/portfolio" component={PortfolioContainer} />
          </div>
        )



    }

// <div className ="container highlightTextIn">
// <ul className="nav nav-tabs">
// <li role="presentation" className="active"><a href="#" style={style}>HOME</a></li>
// <li role="presentation"><a href="#">PORTFOLIO</a></li>
// <li role="presentation"><a href="#">BLOG</a></li>
// <li role="presentation"><a href="#">ABOUT</a></li>
// </ul>
// </div>


}
