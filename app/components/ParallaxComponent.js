/**
 * Created by CharlieShi on 2/16/17.
 */

import React, { Component } from 'react';
import { throttle } from '../utils/throttle';

export default class ParallaxComponent extends Component {
    constructor(props) {
        super(props);

        //Speed and Top are essential
        //zIndex to help with layering content
        this.state = {
            speed: this.props.speed || 1,

            width: '100%',
            height: this.props.height || '100%',

            top: this.props.top || '0%',
            left: this.props.left,
            right: this.props.right,

            maxTop: this.props.maxTop || null,


            
            position: 'absolute',
            zIndex: this.props.zindex || '0',

            //Background Properties
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: this.props.color || null,
            backgroundImage: `url(${this.props.image})`
        };

        this.handleScroll = throttle(this.handleScroll.bind(this), 10);

        //Convert top to px value
        this.top = this.getTop();
    }



    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    getTop() {
        const top = this.props.top;

        //If top is in %, turn into px value by multiplying it against innerHeight 
        //otherwise convert to int 
        //return this value
        return top.indexOf('%') > -1 ?
            window.innerHeight * (top.replace('%', '') / 100) :
            parseInt(top, 10);
    }

    handleScroll() {
        const speed = this.state.speed;
        const top = this.top;

        //calculate new top
        //get current scroll level, # of pixels from the absolute top
        const pageTop = window.scrollY;
        const newTop = (top - (pageTop * speed));
        // console.log('page top', pageTop);
        // console.log('new top', newTop);

        //Set new top position
        // this.refs.parallaxElement.style.top = `${newTop}px`;
        this.refs.parallaxElement.style.transform = `translate3d(0, ${newTop}px, 0)`;
    }

    render() {
        return ( 
                <div 
                    ref = "parallaxElement"
                    style = {{...this.state }} 
                >
                    {this.props.children}
                </div>
        );
    }
}




