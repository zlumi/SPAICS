/* eslint-disable @next/next/no-img-element */

import Background from "./assets/home_bg.png"
import DrawnLogo from "./assets/logo_drawn.gif"
import Image from "next/image"

export default async function Home() {
  return (
    <div>
      <style jsx global>{`
      @keyframes fadeIn {
        from { opacity:0; }
        to { opacity:1; }
      }

      @keyframes shine {
        to {
          background-position: 200% center;
        }
      }
      
      .sweepable p {
        font-family: "Times New Roman", Times, serif;
        margin: 0;
      }

      .sweepable {
        color: black;
        position: absolute;
        left: 50%;
        bottom: 5%;
        z-index: 3;
        transform: translateX(-50%);
        text-align: center;

        background: linear-gradient(45deg, rgba(255,255,255,1) 45%, rgba(255,255,255,0) 55%);
        background-size: 200% 100%;
        animation: shine 2s;

        // only show background on text
        background-clip: text; 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}</style>

    <div className="sweepable">
      <p>CanSat Competition Team 2022-2023</p>
      <p>@ Amsterdam International Community School</p>
    </div>

      <div style={{ width:"100vw", height:"97vh", overflow:"hidden", position:"relative" }}>

        <div style={{ 
          position:"absolute", zIndex:-1, width: "120vw", height: "80vw",
          top:"50%", left:"25%", transform:"translate(-50%, -50%)", 
          opacity:0, animation:"fadeIn ease 2s", animationDelay:"1s", animationFillMode:"forwards"
        }}>
          <Image src={Background} alt="background" fill />
        </div>

        {/* <div style={{
          width:"50vw", height:"50vw", position:"absolute", top:"50%", left:"75%", transform:"translate(-50%, -50%)",
        }}>
          <div style={{ 
            position:"absolute", top:0, transform:"translate(0, 10vw)",
            opacity:0, animation:"fadeIn ease 2s", animationDelay:"2s", animationFillMode:"forwards"
          }}>
            <h1 style={{ fontSize:"3vw" }}>Hi! We are</h1>
          </div>
          <Image src={DrawnLogo} alt="logo" fill />
          <div style={{
            position:"absolute", bottom:0, transform:"translate(0, -12vw)",
            opacity:0, animation:"fadeIn ease 2s", animationDelay:"2s", animationFillMode:"forwards"
          }}>
            <h1 style={{ fontSize:"2vw" }}>@ Amsterdam International Community School</h1>
          </div>
        </div> */}

        <img src={DrawnLogo} alt="logo" style={{
          width:"50vw", height:"50vw", position:"absolute", top:"50%", left:"75%", transform:"translate(-50%, -50%)",
        }} />

      </div>

      <div className="right" style={{ transform:"translate(-50%, -50%)", padding:0 }}>
        <svg height="30vh" viewBox="0 0 4 26">
          <path d = "M2 3A1 1 0 002 1 1 1 0 002 3L2 23C2 23 2 23 2 23A1 1 0 002 25 1 1 0 002 23" />
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