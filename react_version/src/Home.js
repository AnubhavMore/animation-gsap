import React, { useEffect } from 'react';
import { gsap } from "gsap";
import  './home.css';
import img1 from './souvik-laha-SBHrS9zs9Lo-unsplash.jpg';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger if it's not bundled with GSAP


gsap.registerPlugin(ScrollTrigger) ;

const Home = () => {
  useEffect(() => {
    const contentHolderHeight = document.querySelector(".content-holder");
    const imgHolderHeight = window.innerHeight;
    const additionalScrollHeight = window.innerHeight;

    const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight;
    document.body.height = `${totalBodyHeight}px`;

    ScrollTrigger.create({
      trigger: ".website-content",
      start: "-0.1% top",
      end: "bottom bottom",

      onEnter: () => {
        gsap.set(".website-content", { position: 'absolute', top: '195%' })
      },
      onLeaveBack: () => {
        gsap.set(".website-content", { position: 'fixed', top: '0' })
      }
    });

    gsap.to(".header .letters:first-child", {
      x: () => -window.innerWidth * 3,
      scale: 10,
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1
      }
    });

    gsap.to(".header .letters:last-child", {
      x: () => window.innerWidth * 3,
      scale: 10,
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1
      }
    });

    gsap.to(".img-holder", {
      rotation: 90,
      'clip-path': 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: `bottom bottom`,
        markers:true,
        scrub: 1
      }
    });

    gsap.to(".img-holder img", {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1
      }
    });
  }, []);

  return (
    <div>
     <div className='logo'></div>
      <div className='header'>
        <div className='letters'>
          <div>l</div>
          <div>e</div>
          <div>v</div>
        </div>
        <div className='letters'>
          <div>y</div>
          <div>u</div>
          <div>g</div>
        </div>
      </div>
      <div className='website-content'>
        <div className='img-holder'>
          <img src={img1} alt="" />
          </div>
        </div>
        
        </div>
    
  );
};

export default Home;
