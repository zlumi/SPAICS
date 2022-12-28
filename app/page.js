'use client';

/* eslint-disable @next/next/no-img-element */

import bg1 from "./assets/backgrounds/1.png"
import logo_drawn from "./assets/logo_drawn.gif"
import Image from "next/image"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

function RightVertConnector({ style }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        pathLength: 1.05,
        transition: {
          duration: 4
        }
      })
    }
  }, [animation, inView])

  return (
    <div className="right" ref={ref} style={style}>
      <svg height="30vh" viewBox="0 0 4 26">
        <motion.path d = "M2 3A1 1 0 002 1 1 1 0 002 3L2 23C2 23 2 23 2 23A1 1 0 002 25 1 1 0 002 23"
          initial={{ pathLength: .05 }}
          animate={ animation } 
        />
      </svg>
    </div>
  );
}

function DrawnLogo() {
  const [showGif, setShowGif] = useState(false)

  useEffect(() => {
    setShowGif(true);
  }, []);

  return (
    <div style={{ width:"50vw", height:"50vw", position:"absolute", top:"50%", left:"75%", transform:"translate(-50%, -50%)" }}>
      {/* <Image src={DrawnLogo} alt="logo" fill priority onLoad={() => { NEED_TO_RESET_GIF_STATE_SOMEHOW }}/> */}
      <Image src={DrawnLogo} alt="logo" fill priority />

      {showGif ? (
        <Image src={logo_drawn} alt="logo" fill priority onEnded={() => setShowGif(false)} />
      ) : (
        <button onClick={() => setShowGif(true)}>Show GIF</button>
      )}
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    window.BeforeUnloadEvent = () => {
      window.scrollTo(0, 0)
    }
  }, []);

  return (
    <div style={{ position:"relative" }}>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity:0; }
          to { opacity:1; }
        }

        @keyframes shine {
          0% { background-position: 150% center; opacity:0; }
          50% { background-position: 150% center; }
          100% { background-position: -80% center; opacity:1; }
        }

        .photobooth {
          height: 100%;
          max-width: 45vw;
          margin: 2.5%;
          position: absolute;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          overflow: hidden;
        }

        .photobooth div {
          margin: 0.25vw;
          background: red;
          border-radius: 3rem;

          width: 22vw;
          min-width: 180px;

          max-width: 44.5vw;
          max-height: 100%;
          overflow: hidden;
          position: relative;
        }

        .photobooth div img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .right {
          padding: 3rem 0;
          position: relative;
          left: 75%;
          max-width: 45vw;
          text-align: center;
          transform: translateX(-50%);
        }
      `}</style> {/* local stylesheet */}

      <div style={{
        backgroundPosition:"150% center",
        background:`linear-gradient(
          -45deg,
          #EEC643 50%,
          #FFFF00 60%,
          #EEC643 70%
        )`,
        animation:"shine 4s forwards",

        backgroundSize:"200% 100%", backgroundClip:"text", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",

        color:"#DAD2D8", position:"absolute", left:"50%", zIndex:3, textAlign:"center",
        transform:"translateX(-50%)", top:"85vh", opacity:0,
      }}>
        <p style={{ fontFamily:'"Times New Roman", Times, serif', margin:0, fontWeight:"bold" }}>
          CanSat Competition Team 2022-2023
          <br/>
          @ Amsterdam International Community School
        </p>
      </div> {/* Name text */}

      <div style={{ width:"100vw", height:"97vh", overflow:"hidden", position:"relative" }}>

        <div style={{
          position:"absolute",zIndex:-1, width:"120vw", height:"80vw", top:"50%", left:"25%", transform:"translate(-50%, -50%)",
          opacity:0, animation:"fadeIn ease 2s", animationDelay:"1s", animationFillMode:"forwards",
        }}>
          <Image src={bg1} alt="background" fill />
        </div>

        <DrawnLogo />

      </div> {/* images */}

      <div style={{ position:"relative" }}>
      <RightVertConnector style={{ transform:"translate(-50%, -50%)", padding:0 }} />
        <div className="photobooth" style={{ transform:"translateY(-30vh)" }}>
          <div><img src={"https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg"} alt="photo" /></div>
          <div><img src={"https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg"} alt="photo" /></div>
          <div><img src={"https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg"} alt="photo" /></div>
          <div><img src={"https://upload.wikimedia.org/wikipedia/commons/8/8e/Delta_IV_Heavy_Rocket.jpg"} alt="photo" /></div>
          <div><img src={"https://upload.wikimedia.org/wikipedia/commons/8/8e/Delta_IV_Heavy_Rocket.jpg"} alt="photo" /></div>
          <div><img src={"https://upload.wikimedia.org/wikipedia/commons/8/8e/Delta_IV_Heavy_Rocket.jpg"} alt="photo" /></div>
        </div>
        <div className="right" style={{ paddingTop:0 }}>
          <h1>HHHHHHHH</h1>
          <p>What a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld fkljasd</p>
        </div>
        <RightVertConnector />
        <div className="right">
          <h1>HHHHHHHH</h1>
          <p>What a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld fkljasd What a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld fkljasdWhat a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld fkljasd What a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld</p>
        </div>
        <RightVertConnector />
        <div className="right">
          <h1>HHHHHHHH</h1>
          <p>What a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld fkljasd What a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld fkljasdWhat a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld fkljasd What a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld</p>
        </div>
        <RightVertConnector />
        <div className="right">
          <h1>HHHHHHHH</h1>
          <p>What a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld fkljasd What a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld fkljasdWhat a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld fkljasd What a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld</p>
        </div>
      </div>
    </div>
  )
}

// home : introduction, team description & browse navs, projected timeline
// teams : detailed team description, team roles & their descriptions, members' photo & bio
// legacy : SPAICS history, past teams & achievements, area of influence & impact
// contact : social media links, contact info, contact form
// 
// support us : 
// dashboard : dynamic launch data