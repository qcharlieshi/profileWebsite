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
        } else if (this.props.pathname === '/parallax') {
            style = {
                backgroundColor: '#ffaf1b'
            }
        }




        return (
            <ul className="nav nav-tabs">
                <li role="presentation" className="active" style={style}><a href="#" style={style}>Me: Charlie Shi</a></li>
                <li role="presentation"><a href="#">My Projects</a></li>
                <li role="presentation"><a href="#">My Blog</a></li>
            </ul>

        )



    }




}
