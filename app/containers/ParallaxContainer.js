/**
 * Created by CharlieShi on 5/25/17.
 */

import React from 'react';
import ParallaxComponent from '../components/ParallaxComponent'

export default () => {
  //assign all parallax images
  const parallaxImage = [];
  for (let i = 0; i <= 8; i++) {
    parallaxImage.push(`'../images/parallax/parallax${i}edit.png'`);
  }

  return (
    <div style={{height: '1000px', width: '100%', marginTop: '-100px'}}>
             <ParallaxComponent
                                                      speed='-0.7'
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
  )
}