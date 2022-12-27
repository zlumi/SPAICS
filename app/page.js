'use client';

/* eslint-disable @next/next/no-img-element */

import Background from "./assets/home_bg.png"
import DrawnLogo from "./assets/logo_drawn.gif"
import Image from "next/image"

export default function Home() {
  return (
    <div>
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
      `}</style>

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
        transform:"translateX(-50%)", top:"85%", opacity:0,
      }}>
        <p style={{ fontFamily:'"Times New Roman", Times, serif', margin:0, fontWeight:"bold" }}>
          CanSat Competition Team 2022-2023
          <br/>
          @ Amsterdam International Community School
        </p>
      </div>

      <div style={{ width:"100vw", height:"97vh", overflow:"hidden", position:"relative" }}>

        <div style={{ 
          position:"absolute", zIndex:-1, width: "120vw", height: "80vw",
          top:"50%", left:"25%", transform:"translate(-50%, -50%)",
          opacity:0, animation:"fadeIn ease 2s", animationDelay:"1s", animationFillMode:"forwards"
        }}>
          <Image src={Background} alt="background" fill />
        </div>

        <div style={{
          width:"50vw", height:"50vw", position:"absolute", top:"50%", left:"75%", transform:"translate(-50%, -50%)",
        }}>
          {/* <div style={{ 
            position:"absolute", top:0, transform:"translate(0, 10vw)",
            opacity:0, animation:"fadeIn ease 2s", animationDelay:"2s", animationFillMode:"forwards"
          }}>
            <h1 style={{ fontSize:"3vw" }}>Hi! We are</h1>
          </div> */}
          <Image src={DrawnLogo} alt="logo" fill />
          {/* <div style={{
            position:"absolute", bottom:0, transform:"translate(0, -12vw)",
            opacity:0, animation:"fadeIn ease 2s", animationDelay:"2s", animationFillMode:"forwards"
          }}>
            <h1 style={{ fontSize:"2vw" }}>@ Amsterdam International Community School</h1>
          </div> */}
        </div>

        {/* <img src={DrawnLogo} alt="logo" style={{
          width:"50vw", height:"50vw", position:"absolute", top:"50%", left:"75%", transform:"translate(-50%, -50%)",
        }} /> */}

      </div>

      <div className="right" style={{ transform:"translate(-50%, -50%)", padding:0 }}>
        <svg height="30vh" viewBox="0 0 4 26">
          <path d = "M2 3A1 1 0 002 1 1 1 0 002 3L2 23C2 23 2 23 2 23A1 1 0 002 25 1 1 0 002 23" style={{ animationDelay:"3s" }} />
        </svg>
      </div>

      <div className="right" style={{ paddingTop:0 }}>
        <h1>HHHHHHHH</h1>
        <p>What a sdflaksdflkajksld laksdklflkasdlkfklj ajklsdklflk aklsdkjfklj laksdlkflkaskjld fkljasd</p>
      </div>

      <div className="right">
        <svg height="30vh" viewBox="0 0 4 26">
          <path d = "M2 3A1 1 0 002 1 1 1 0 002 3L2 23C2 23 2 23 2 23A1 1 0 002 25 1 1 0 002 23" />
        </svg>
      </div>

      <div className="right">
        <h1>HHHHHHHH</h1>
        <p>kldsajflkfsadkjlklfadlskk lkadsfjklklsdafladsfkjfasdjkkkjdfsa lkajskdfljklasd lkfjalsdkjf lkajsdlkf kldsajflkfsadkjlklfadlskk lkadsfjklklsdafladsfkjfasdjkkkjdfsa lkajskdfljklasd lkfjalsdkjf lkajsdlkf kldsajflkfsadkjlklfadlskk lkadsfjklklsdafladsfkjfasdjkkkjdfsa lkajskdfljklasd lkfjalsdkjf lkajsdlkf kldsajflkfsadkjlklfadlskk lkadsfjklklsdafladsfkjfasdjkkkjdfsa lkajskdfljklasd lkfjalsdkjf lkajsdlkf kldsajflkfsadkjlklfadlskk lkadsfjklklsdafladsfkjfasdjkkkjdfsa lkajskdfljklasd lkfjalsdkjf lkajsdlkf </p>
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