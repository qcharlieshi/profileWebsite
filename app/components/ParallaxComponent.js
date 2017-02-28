/**
 * Created by CharlieShi on 2/16/17.
 */

import React, { Component } from 'react';
import {throttle} from 'lodash';

// Component styles
//import styles from './styles';

export default class ParallaxComponent extends Component {
    constructor(props) {
        super(props);

        //Speed and Top are essential
        this.state = {
            speed: this.props.speed,

            width: '100%',
            height: '100%',

            top: this.props.top,
            left: this.props.left,
            right: this.props.right,

            position: 'absolute',
            zIndex: this.props.zindex,

            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${this.props.image})`
        };

        this.handleScroll = throttle(this.handleScroll.bind(this), 10);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    getTop() {
        const top = this.props.top;

        //If top is in %, turn into px value
        return top.indexOf('%') > -1
            ? window.innerHeight * (top.replace('%', '') / 100)
            : parseInt(top, 10);
    }

    handleScroll() {
        const speed = this.props.speed;

        //get current top
        const top = this.getTop();
        //console.log('top is', top);

        //calculate new top
        //get current scroll level, position from top
        const pageTop = window.pageYOffset;
        const newTop = (top - (pageTop * speed));

        // Set new top position
        this.refs.parallaxElement.style.top = `${newTop}px`;
    }

    render() {
        return (
            <div
                ref="parallaxElement"
                style={{...this.state}}
            >
            </div>
        );
    }
}