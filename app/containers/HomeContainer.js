/**
 * Created by CharlieShi on 2/28/17.
 */

import React, {Component} from 'react';
import ParallaxComponent from '../components/ParallaxComponent';
import InfoboxComponent from '../components/InfoboxComponent';
import ParallaxContainer from './ParallaxContainer';
import YellowHeaderComponent from '../components/YellowHeaderComponent';

export default class HomeContainer extends Component {
    constructor(props) {
      super(props)

      this.state = {
        yellowCardStyle: {opacity: 0}
      }
    }

    componentDidMount() {
      //Scrolls page slightly correct for display errors
      window.scrollTo(50, 50);
      window.scrollTo(0, 0);
    }

    componentWillReceiveProps() {
      this.handleScroll();
    }

    handleScroll() {
      let opacity = this.props.scroll / 600;

      this.setState({yellowCardStyle: {opacity}})
    }

    render() {
      return(

          <div>
          {/*Parallax Image Components*/}
          <ParallaxContainer />

          {/*All black component*/}
            <ParallaxComponent
              speed = '.5'
              color = '#1D2731'
              zindex = '-1'
              top = '48%'
              height = '120%'
            >
              <YellowHeaderComponent yellowCardStyle={this.state.yellowCardStyle} />

              <div className="row" style={{marginRight: '0px'}}>
                <div className="col-6">
                  <InfoboxComponent name="Technology"/>
                </div>

                <div className="col-6">
                  <div className="homepageInfobox" id="infoboxCompanies">
                    test content 2
                  </div>
                </div>
              </div>

            <ParallaxComponent
              speed = '.5'
              color = '#D9B310'
              zindex = '1000'
              top = '75%'
              height = '400px'
            >
            </ParallaxComponent>

            <ParallaxComponent
              speed = '.5'
              color = '#1D2731'
              zindex = '-1'
              top = '80%'
            >
            </ParallaxComponent>

            </ParallaxComponent>
          {/*</div>*/}
        </div>

      )
    }
}