/**
 * Created by CharlieShi on 2/16/17.
 */

import React, { Component } from 'react';

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

            
            position: 'absolute',
            zIndex: this.props.zindex || '0',

            //Background Properties
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: this.props.color || null,
            backgroundImage: `url(${this.props.image})`
        };

        this.handleScroll = this.throttle(this.handleScroll.bind(this), 10);

        //Convert top to px value
        this.top = this.getTop();
    }

    throttle(fn, wait) {
        //wait in milliseconds
        let time = Date.now()

        return function() {
            if ((time + wait - Date.now()) < 0) {
                fn()
                time = Date.now()
            }
        }
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
        console.log('page top', pageTop);
        console.log('new top', newTop);

        //Set new top position
        this.refs.parallaxElement.style.top = `${newTop}px`;
        //this.refs.parallaxElement.style.transform = `translate3d(0, ${newTop}px, 0)`;
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



// var images = document.querySelectorAll('.parallax__image');

// function setTopOffset(image) {
//   var imageHeight = image.offsetHeight;
//   var containerHeight = image.parentNode.offsetHeight;
//   var pageHeight = document.documentElement.clientHeight;
//   var imageDistance = imageHeight - containerHeight;
//   var containerTop = image.parentNode.getBoundingClientRect().top;
//   var distancePercent = 0;
//   var offsetTop = 0;

//   if (containerTop >= pageHeight) {
//     distancePercent = 0;
//   } else if (containerTop <= -containerHeight) {
//     distancePercent = 1;
//   } else {
//     distancePercent = (containerTop + containerHeight) / (pageHeight + containerHeight);
//   }

//   offsetTop = distancePercent * imageDistance * -1;
//   image.style.transform = 'translate3d(0,' + offsetTop + 'px, 0)';
// }

// function updateImages() {
//   [].forEach.call(images, setTopOffset);
// }

// function animate() {
//   requestAnimationFrame(animate);
//   updateImages();
// }

// animate();
