/**
 * Created by CharlieShi on 2/28/17.
 */

import React, {Component} from 'react';
import ParallaxComponent from './ParallaxContainer';
export default class HomeContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      console.log('scrolling?')
      window.scrollTo(50, 50);
    }

    render() {
        //const backgroundStyle = { position: 'absolute', backgroundColor: '#000000', height: '100%', top: '500px'}

        return(

            <div className="row">
              <div className="col-lg-12" id="home-container" />
              <ParallaxComponent/>
            </div>
        )

    }




}