import React from 'react';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';

const Animation = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("body", {
      backgroundImage: "linear-gradient(-45deg, red, blue, green)",
      duration: 1,
      ease: "power2.inOut",
    })
    .from(".navbar li", {
      opacity: 0,
      y: -200,
      duration: 1,
      stagger: 0.1,
      ease: "power2.inOut",
    })
    .from("#logo", {
      rotateX: 720,
      opacity: 0,
      rotateY: 720,
      rotationZ: 720,
      duration: 1,
    })
    .from(".main1 h1", {
      x: 300,
      opacity: 0,
      duration: 1,
    })
    .from(".main1 p span", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
    })
    gsap.from(".main2 img", {
      scale: 0,
      y: -400,
      x: -1200,
      duration: 2,
    });
  });

  return <></>;
};

export default Animation;
