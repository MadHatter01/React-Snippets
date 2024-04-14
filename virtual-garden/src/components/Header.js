import React from 'react';
import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


import giphy from './giphy.gif'
import pexels from './pexels-photo-1.png'
import pexels2 from './pexels-2.jpg'

// source of gif is from giphy attributed to http://www.holidaypirates.com/

const Header = () => {
    const ref = useRef();

    return (
        <header>
            <Parallax pages={3} ref={ref}>

                <ParallaxLayer speed={1} offset={0} factor={1} style={{ backgroundImage: `url(${pexels2})`, backgroundSize: 'cover' }}>
                    <h2>Hey there!</h2>
                </ParallaxLayer>
                <ParallaxLayer speed={1} offset={0.9} style={{ backgroundImage: `url(${pexels})`, backgroundSize: 'cover' }}>
                    <h2>The Earth laughs in Flowers</h2>
                </ParallaxLayer>
                <ParallaxLayer
                    sticky={{ start: 0.8, end: 2.0 }}>
                    <img src={giphy} alt="flower gif" />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.5}
                    speed={0.05}
                    onClick={() => ref.current.scrollTo(1)}
                >
                    <h2>Welcome to virtual Garden</h2>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={2}
                    onClick={() => ref.current.scrollTo(0)}
                >
                    <h2>Hi!</h2>
                </ParallaxLayer>
            </Parallax>
        </header>
    )
}

export default Header;