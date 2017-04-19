/**
 * Created by CharlieShi on 2/16/17.
 */

import React, { Component } from 'react';
import ParallaxComponent from '../components/ParallaxComponent';



export default class ParallaxTwoContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const parallaxImageNY = '../images/nyc.jpg';
        const parallaxImageIbiza = '../images/ibiza.jpg';
        const parallaxImageIbizaText = '../images/ibizaText.png';
        const bannana = '../images/bananna.gif';

        return ( 
            <div>
                <ParallaxComponent
                    speed = {0.4}
                    zindex = "0"
                    top = '0%'
                    image = {parallaxImageNY}
                />

                <ParallaxComponent
                    speed = {2.5}
                    zindex = "1"
                    top = "40%"
                    height = "400px"
                    color = '#fff'
                >
                    <div className="container">
                    <h3>Inside Parallax Container</h3>
                    </div>
                </ParallaxComponent>


                <ParallaxComponent
                    speed = {0.4}
                    zindex = "1"
                    top = '100%'
                    color = '#000'
                    height = '800px'
                >
                    <div className="container">
                    <h3 style={{color: '#fff'}}>Inside Parallax Container 2</h3>
                    </div>
                </ParallaxComponent>
     
                <ParallaxComponent
                    speed = {-0.2}
                    zindex = "0"
                    top = '100%'
                    image = {parallaxImageIbiza}
                />

                <ParallaxComponent
                    speed = {1}
                    zindex = "3"
                    top = '250%'
                    image = {parallaxImageIbizaText}
                />


                <ParallaxComponent
                    speed = {1}
                    zindex = "1"
                    top = "330%"
                    height = "400px"
                    color = '#fff'
                >
                    <div className="container">
                        <h1 style={{textAlign: 'center'}}>Welcome to the Mystical Island of Ibiza</h1>
                        <img src={bannana} style={{height: '50%'}}/>
                        <img src={bannana} style={{height: '50%'}}/>
                        <img src={bannana} style={{height: '50%'}}/>
                        <img src={bannana} style={{height: '50%'}}/>
                    </div>
                </ParallaxComponent>
            </div>
        )
    }
}

//<img src = {parallaxImageIbiza} />