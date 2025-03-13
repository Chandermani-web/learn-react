"use client";
import Image1 from './assets/Screenshot 2025-03-13 211034.png';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';

export default function Home() {
  const txt = "This is 13-03-2025 , Toady i learned what is react and how it work , understand about it's control flow, creation of a react-folder and how to run this in build environment and dev/start environment.".split(" ");

  useGSAP(()=>{
    const tl = gsap.timeline();
    gsap.from("body",{
      backgroundImage: "linear-gradient(-45deg, red, blue,green)",
      duration: 2,
      ease: "power2.inOut",
    }),
    
    gsap.from(".navbar li",{
      opacity: 0,
      y: -200,
      duration:1,
      stagger: 0.2,
      ease: "power2.inOut",
    }),
    gsap.from("#logo",{
      rotateX: 720,
      duration: 2,
    })
    gsap.from(".main1 h1",{
      x: 300,
      opacity: 0,
      textShadow: "8px 8px 1px red",
      duration: 2,
    }),
    gsap.from(".main1 p span",{
      y: 40,
      opacity: 0,
      duration: 3,
      stagger: 0.2,
    }),
    gsap.from(".main2 img",{
      scale: 0,
      duration: 1,
    })
})

  return (
    <>
    <div className="navbar p-10 flex justify-between mt-2">
        <h1 id="logo" className="text-5xl font-extrabold text-blue-500">OGO</h1>
        <ul className='nav-links flex gap-15 text-1.5xl uppercase font-bold'>
          {["home","about","service","contact","signup/login"].map((item, index, array)=>{
            return (
              <li key={index} id={item.toLowerCase().replace("/","-")} className={index == array.length-1 ? "registration text-orange-500": ""}>
              {item}
              </li>
            )            
          })}
        </ul>
      </div>
      <div className="main p-10 flex justify-around place-items-center">
        <div className="main1 flex flex-col w-1/2 tracking-widest gap-6">
          <h1 className='text-6xl text-zinc-400 uppercase'>learning react from scratch</h1>
          <p className='uppercase'>
            {txt.map((item,index)=> {
              return (
                <span key={index}>{item} </span>
              )
            })}
          </p>
        </div>
        <div className="main2">
          <img src='https://media.istockphoto.com/id/888477728/photo/abstract-digital-network-communication.jpg?s=1024x1024&w=is&k=20&c=3Fusq5fboU8IOZqNP8vuLDGZSzrkMATrpzq1F0xz7io='  alt='image1' height={400} width={700}/>
        </div>
      </div>
    </>    
  );
}
