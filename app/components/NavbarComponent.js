/**
 * Created by CharlieShi on 2/24/17.
 */

import React, { Component } from 'react';
import {Router, Route, IndexRedirect, IndexRoute, browserHistory, hashHistory} from 'react-router';

export default class NavbarComponent extends Component {
    constructor(props) {
        super(props)
    }



    render() {

        //dynamiclly set the navbar color based on the current pathname
        let style = {};

        if (this.props.pathname === '/') {
            style = {
                backgroundColor: '#000'
            }
        } else if (this.props.pathname === '/home') {
            style = {
                backgroundColor: '#4286d7'
            }
        }


        return (
          <div className ="navContainer highlightTextIn" style={style}>
                <a alt="HOME" href="#">HOME</a>
                <a href="#">PORTFOLIO</a>
                <a href="#">BLOG</a>
                <a href="#">ABOUT</a>
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
