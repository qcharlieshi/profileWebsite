/**
 * Created by CharlieShi on 2/28/17.
 */

import React, {Component} from 'react';
import ParallaxComponent from '../components/ParallaxComponent';
import NavbarComponent from '../components/NavbarComponent';



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
      let opacity = this.props.scroll / 400;

      this.setState({yellowCardStyle: {opacity}})
    }

    render() {
      //assign all parallax images
      const parallaxImage = [];
      for (let i = 0; i <= 8; i++) {
        parallaxImage.push(`'../images/parallax/parallax${i}edit.png'`);
      }

      return(
        <div>
          {/*Parallax Image Components*/}
          <div className="row" style={{height: '1000px', width: '1600px', marginTop: '-100px', marginLeft: '0px'}}>
            <ParallaxComponent
                                                      speed='-0.6'
                                                      image={ '../images/parallax/parallax0edit.png' }
                                                      zindex="-10"
                                                      top='0%'
            />

            <ParallaxComponent
                                                      speed='-0.5'
                                                      image={ '../images/parallax/parallax1edit.png' }
                                                      zindex='-9'
                                                      top='0%'
            />

            <ParallaxComponent
                                                      speed='-0.5'
                                                      image={ '../images/parallax/parallax2edit.png' }
                                                      zindex='-8'
                                                      top='0%'
            />

            <ParallaxComponent
                                                      speed='-0.4'
                                                      image={ parallaxImage[3] }
                                                      zindex='-7'
                                                      top='0%'
            />

            <ParallaxComponent
                                                      speed='-0.3'
                                                      image={ parallaxImage[4] }
                                                      zindex='-6'
                                                      top='0%'
            />

            <ParallaxComponent
                                                      speed='-0.2'
                                                      image={ '../images/parallax/parallax5edit.png'}
                                                      zindex='-5'
                                                      top='0%'
            />

            <ParallaxComponent
                                                      speed='.5'
                                                      image={ '../images/parallax/parallax6edit.png'}
                                                      zindex='-4'
                                                      top='0%'
            />

            <ParallaxComponent
                                                      speed='.5'
                                                      image={ '../images/parallax/parallax7edit.png'}
                                                      zindex='-3'
                                                      top='0%'
            />

            <ParallaxComponent
                                                      speed='.5'
                                                      image={ '../images/parallax/parallax8edit.png'}
                                                      zindex='-2'
                                                      top='0%'
            />

            {/*Personal Logo*/}
            <ParallaxComponent
                                                      speed='-0.5'
                                                      image={ '../images/parallax/personalWebsiteLogo.png' }
                                                      zindex='-5'
                                                      top='-10%'
            />
          </div>

          {/*All black component*/}
          <ParallaxComponent
            speed = '.5'
            color = '#1D2731'
            zindex = '-1'
            top = '48%'
          >
            <div className="yellowCard" style={this.state.yellowCardStyle}>
              <div className="headerText">Full Stack Software Engineer & Designer</div>
              <hr className="fancy"/>
              <div>
                <p className="bodyText">
                Hello my name is Charlie Shi and I'm a software engineer
                that graduated from Emory University in 2013
                </p>
              </div>
            </div>
          </ParallaxComponent>

        </div>
      )
    }
}