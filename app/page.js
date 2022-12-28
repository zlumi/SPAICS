'use client';
/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import bg1 from "./assets/backgrounds/1.png"
import RightVertConnector from "./components/home-components/rightvertconn";
import DrawnLogo from "./components/home-components/drawnlogo";

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.BeforeUnloadEvent = () => {
      window.scrollTo(0, 0)
    }
  }, []);

  const gallaryImgIDs = [
    "1DZlz_gPQQXJpmm0i3eVG1_ez8f7g2IFt",
    "1DZlz_gPQQXJpmm0i3eVG1_ez8f7g2IFt",
    "1DZlz_gPQQXJpmm0i3eVG1_ez8f7g2IFt",
    "1DZlz_gPQQXJpmm0i3eVG1_ez8f7g2IFt",
    "1DZlz_gPQQXJpmm0i3eVG1_ez8f7g2IFt",
    "1DZlz_gPQQXJpmm0i3eVG1_ez8f7g2IFt",
  ]

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
          background: #152238;
          border-radius: 3rem;

          width: 22vw;
          min-width: 180px;

          max-width: 44.5vw;
          max-height: 100%;
          overflow: hidden;
          position: relative;

          transition: transform 0.2s ease-in-out;
        }

        .photobooth div:hover {
          cursor: pointer;
          transform: scale(1.05);
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
          {gallaryImgIDs.map((id, index) => (
            <div key={index}>
              <img src={ "https://drive.google.com/uc?export=view&id="+id } alt={ "photo_"+index } />
            </div>
          ))}
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