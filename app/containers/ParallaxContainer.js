/**
 * Created by CharlieShi on 2/16/17.
 */

import React, { Component } from 'react';
import ParallaxComponent from '../components/ParallaxComponent';

export default class ParallaxContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const parallaxImage = [];

        //assign all parallax images
        for (let i = 0; i <= 8; i++) {
            parallaxImage.push(`'../images/parallax/parallax${i}.png'`);
        }

        return ( 
            <div>
                <ParallaxComponent
                    speed = '-.6'
                    image = { '../images/parallax/parallax0edit.png' }
                    zindex = "-10"
                    top = '0%'
                />

                <ParallaxComponent
                    speed = '-0.5'
                    image = { '../images/parallax/parallax1edit.png' }
                    zindex = '-9'
                    top = '0%'
                />

                <ParallaxComponent
                    speed = '-.5'
                    image = { '../images/parallax/parallax2edit.png' }
                    zindex = '-8'
                    top = '0%'
                />

                <ParallaxComponent
                    speed = '-.3'
                    image = { parallaxImage[3] }
                    zindex = '-7'
                    top = '0%'
                />

                <ParallaxComponent
                    speed = '-.4'
                    image = { parallaxImage[4] }
                    zindex = '-6'
                    top = '0%'
                />

                <ParallaxComponent
                    speed = '-.5'
                    image = { parallaxImage[5] }
                    zindex = '-5'
                    top = '0%'
                />

                <ParallaxComponent
                    speed = '.5'
                    image = { parallaxImage[6] }
                    zindex = '-4'
                    top = '0%'
                />

                <ParallaxComponent
                    speed = '.5'
                    image = { parallaxImage[7] }
                    zindex = '-3'
                    top = '0%'
                />

                <ParallaxComponent
                    speed = '.5'
                    image = { parallaxImage[8] }
                    zindex = '-2'
                    top = '0%'
                />

              {/*All black component*/}
              <ParallaxComponent
                                                        speed = '.5'
                                                        color = 'black'
                                                        zindex = '-1'
                                                        top = '50%'
              />
            </div>
        )
    }
}