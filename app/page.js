'use client';
/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import bg1 from "./assets/backgrounds/1.png"
import RightVertConnector from "./components/home-components/rightvertconn";
import DrawnLogo from "./components/home-components/drawnlogo";
import './homeStyles.css'

import { useEffect } from "react"

import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  const gallaryImgIDs_col1 = [
    "1DZlz_gPQQXJpmm0i3eVG1_ez8f7g2IFt",
    "1DZlz_gPQQXJpmm0i3eVG1_ez8f7g2IFt",
    "1DZlz_gPQQXJpmm0i3eVG1_ez8f7g2IFt",
    "1DZlz_gPQQXJpmm0i3eVG1_ez8f7g2IFt",
    "1DZlz_gPQQXJpmm0i3eVG1_ez8f7g2IFt",
  ]

  const gallaryImgIDs_col2 = [
    "1BdlWrTQ6ukeWT95TZM5KaCSGPDNkE4X0",
    "1BdlWrTQ6ukeWT95TZM5KaCSGPDNkE4X0",
    "1BdlWrTQ6ukeWT95TZM5KaCSGPDNkE4X0",
    "1BdlWrTQ6ukeWT95TZM5KaCSGPDNkE4X0",
    "1BdlWrTQ6ukeWT95TZM5KaCSGPDNkE4X0",
  ]

  return (
    <ParallaxProvider>
    <div style={{ position:"relative" }}>
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
        <div className="photobooth">
          <Parallax speed={-20}>
            {gallaryImgIDs_col1.map((id, index) => (
              <div className="photo" key={index}>
                <img src={ "https://drive.google.com/uc?export=view&id="+id } alt={ "photo_"+index } />
              </div>
            ))}
          </Parallax>
          <Parallax speed={-50}>
            {gallaryImgIDs_col2.map((id, index) => (
              <div className="photo" key={index}>
                <img src={ "https://drive.google.com/uc?export=view&id="+id } alt={ "photo_"+index } />
              </div>
            ))}
          </Parallax>
        </div>

        <RightVertConnector style={{ transform:"translate(-50%, -50%)", padding:0 }} />
        <div className="right" style={{ paddingTop:0 }}>
          <h1>The Journey of a Thousand Lightyears Begins with one Step</h1>
          <p>
            Planetary exploration, technological development, cutting-edge innovation all seem so distant, so detachted from reality; but we are here to change that. Two teams, one goal: bring the future to the present.
          </p>
        </div>
        <RightVertConnector />
        <div className="right">
          <h1>On that Pursuit of Innovation</h1>
          <p>
            As challengers in the annual <a href="https://www.esa.int/Education/CanSat" target="_blank" rel="noreferrer">CanSat competition</a> and directly under the oversight of the <a href="https://www.esa.int" target="_blank" rel="noreferrer">European Space Agency</a>. Bureaus of the <a href="https://dare.tudelft.nl/projects/cansat" target="_blank" rel="noreferrer">Delft Aerospace Rocket Engineering</a> of the TU Delft will also be in collaboration with us to bring our dreams to the skies
          </p>
        </div>
        <RightVertConnector />
        <div className="right">
          <h1>Go fast, but still Far</h1>
          <p>
            As students of the <a href="https://ibo.org">International Bacalaureate</a> from <a href="https://aics.espritscholen.nl">AICS</a>, our uniqueness lies in our particular discipline, creativity, and most importantly, passion. We composite specialization and teamwork to bring engineering and sciences to the next level.
          </p>
        </div>
      </div>
    </div>
    </ParallaxProvider>
  )
}

// home : introduction, team description & browse navs, projected timeline
// teams : detailed team description, team roles & their descriptions, members' photo & bio
// legacy : SPAICS history, past teams & achievements, area of influence & impact
// contact : social media links, contact info, contact form
// 
// support us : 
// dashboard : dynamic launch data