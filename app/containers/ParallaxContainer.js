/**
 * Created by CharlieShi on 2/16/17.
 */

import React, {Component} from 'react';
import ParallaxComponent from '../components/ParallaxComponent';


const parallaxImage = [];

//assign all parallax images
for(let i = 0; i <= 8; i++) {
    parallaxImage.push(`'../images/parallax/parallax${i}.png'`);
}

export default class ParallaxContainer extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        console.log("parallax component",this.props);
        return(
            <div>
                <ParallaxComponent
                    speed = '-0.3'
                    image = {'../images/parallax/parallax0edit.png'}
                    zindex = '0'
                    top = '5%'
                />

                <ParallaxComponent
                    speed = '-0.1'
                    image = {parallaxImage[1]}
                    zindex = '1'
                    top = '5%'
                />

                <ParallaxComponent
                    speed = '-.1'
                    image = {parallaxImage[2]}
                    zindex = '2'
                    top = '5%'
                />

                <ParallaxComponent
                    speed = '-.05'
                    image = {parallaxImage[3]}
                    zindex = '3'
                    top = '5%'
                />

                <ParallaxComponent
                    speed = '-.04'
                    image = {parallaxImage[4]}
                    zindex = '4'
                    top = '5%'
                />

                <ParallaxComponent
                    speed = '-.03'
                    image = {parallaxImage[5]}
                    zindex = '5'
                    top = '5%'
                />

                <ParallaxComponent
                    speed = '.5'
                    image = {parallaxImage[6]}
                    zindex = '6'
                    top = '5%'
                />

                <ParallaxComponent
                    speed = '.5'
                    image = {parallaxImage[7]}
                    zindex = '7'
                    top = '5%'
                />

                <ParallaxComponent
                    speed = '.5'
                    image = {parallaxImage[8]}
                    zindex = '8'
                    top = '5%'
                />
            </div>
        )
    }
}






