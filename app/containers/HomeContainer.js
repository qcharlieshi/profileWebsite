/**
 * Created by CharlieShi on 2/28/17.
 */

import React, {Component} from 'react';

export default class HomeContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('in home container render function');
        return(

            <div className="row" id="home-container">
                <h3>inside homecontainer div</h3>
            </div>



        )



    }




}