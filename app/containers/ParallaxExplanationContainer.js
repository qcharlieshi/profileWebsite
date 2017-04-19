import React, { Component } from 'react';
import ParallaxComponent from '../components/ParallaxComponent';

export default class ParallaxExplanationContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const parallaxImageNY = '../images/nyc.jpg';

        return (
                <ParallaxComponent
                    speed = {10}
                    zindex = "0"
                    top = '20%'
                    image = {parallaxImageNY}
                />

        )
    }

}
