/**
 * Created by CharlieShi on 2/28/17.
 */

import React, {Component} from 'react';
import ParallaxComponent from '../components/ParallaxComponent';
import Infobox from '../components/Infobox';


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
            height = '120%'
          >
            <div className="yellowCard" style={this.state.yellowCardStyle}>
              <div className="headerText">Full Stack Software Engineer & Designer</div>
              <hr className="fancy"/>
              <div className="bodyText">
                <p>
                  Hello, my name is <b>Charlie Shi</b> and I’m a software engineer that graduated
                  from Emory University in 2013 with a finance degree. After spending some
                  time in banking and consulting I made the decision to get back to my first love,
                  software engineering, by taking the full-time web immersive program at Fullstack Academy.
                  My current expertise lies in web development whether its creating a server to serve up a
                  RESTful API or carefully crafting a beautiful component in React and CSS. I pride myself
                  by having a mix of technical skill and creative ingenuity.
                </p>

                <p>
                  To view the rest of my developer story click here. You can view my resume in the about section
                  of your navbar or find my contact information by scrolling further down.
                </p>
              </div>
            </div>

            <Infobox name="Technology"/>

            <div className="homepageInfobox" id="infoboxCompanies">
              test content 2
            </div>

          {/*Test Content*/}
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

        </div>
      )
    }
}