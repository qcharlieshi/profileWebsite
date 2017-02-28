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
        //pass props down to children
        let children = this.props.children ? React.cloneElement(this.props.children, this.props) : null;
        //Render out children
        console.log("app container",this.props);

        return (
            <div id="main" className="container-fluid">
                <div className="row">
                    <NavbarComponent pathname={this.props.location.pathname} />
                </div>

                <div className="row">
                    <div className="col">
                        {children}
                    </div>
                </div>

                <div style={{height: 2000}}></div>
            </div>
        )
    }
}



{/*<div id="main" className="container-fluid">*/}
    {/*<div className="col">*/}
        {/*<h3>test</h3>*/}
        {/*{children}*/}
    {/*</div>*/}
{/*</div>*/}