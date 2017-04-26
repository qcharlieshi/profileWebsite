/**
 * Created by CharlieShi on 2/16/17.
 */


import React, {Component} from 'react';
import NavbarComponent from '../components/NavbarComponent';

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div id="main" className="container-fluid">
                <div className="row">
                    <NavbarComponent pathname={this.props.location.pathname} />
                </div>

                <div className="row">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

