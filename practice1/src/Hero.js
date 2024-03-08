'use client';

import React, { useEffect } from 'react';
import './hero.css';
import gsap  from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger if it's not bundled with GSAP

gsap.registerPlugin(ScrollTrigger) ;

function Hero() {

    useEffect(() => {
        const left = document.querySelector('.left');
        const right = document.querySelector('.right');
       

        let t1 = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

        t1.to(left, { left: '0', duration: 2 }).to(right, { left: '0', duration: 2 }, '-=2')

    }, []); // Empty dependency array ensures the effect runs only once after initial render

    useEffect(()=>{
        const marqueeWidth = gsap.getProperty(".marquee > div", "width");

        let t1 = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

        t1.to(".marquee_part",{
            
            repeat:-1,
            duration:3,
            ease:"none",
            x: "-=" + marqueeWidth, // move each box by the width of .marquee element
            modifiers: {
              x: gsap.utils.unitize(x => parseFloat(x) % marqueeWidth) //force x value to be between 0 and marqueeWidth using modulus

            }}).totalProgress(0.5)

        .set(".marquee_inner",{xPercent:-50});

    },[])
    

  return (
    <div>
        <div className="hero-title">
            <h1 className="left">#RallyFor</h1>
            <h1 className="right">StartUp</h1>
        </div>
        <div className='marquee'>
            <div className='marquee_inner'>
                <div className='marquee_part'>
                     #RallyForStartUp
                </div>
            </div>
            <div className='marquee_inner'>
                <div className='marquee_part'>
                     #RallyForStartUp
                </div>
            </div>
            <div className='marquee_inner'>
                <div className='marquee_part'>
                     #RallyForStartUp
                </div>
            </div>
            <div className='marquee_inner'>
                <div className='marquee_part'>
                     #RallyForStartUp
                </div>
            </div>
            <div className='marquee_inner'>
                <div className='marquee_part'>
                     #RallyForStartUp
                </div>
            </div>
            <div className='marquee_inner'>
                <div className='marquee_part'>
                     #RallyForStartUp
                </div>
            </div>
            <div className='marquee_inner'>
                <div className='marquee_part'>
                     #RallyForStartUp
                </div>
            </div>
            <div className='marquee_inner'>
                <div className='marquee_part'>
                     #RallyForStartUp
                </div>
            </div>
            <div className='marquee_inner'>
                <div className='marquee_part'>
                     #RallyForStartUp
                </div>
            </div>
            <div className='marquee_inner'>
                <div className='marquee_part'>
                     #RallyForStartUp
                </div>
            </div>
            <div className='marquee_inner'>
                <div className='marquee_part'>
                     #RallyForStartUp
                </div>
            </div>
            <div className='marquee_inner'>
                <div className='marquee_part'>
                     #RallyForStartUp
                </div>
            </div>
        </div>
        <div className='hover-img'>
           <img src={require('./images/pexels-francesco-ungaro-1525041.jpg')} className='img'/>
           <p className='hover-text'>YOooo this is jus a trial</p>
        </div>
    </div>
  )
}

export default Hero