'use client';
/* eslint-disable @next/next/no-img-element */

import bg1 from "./assets/backgrounds/1.png"
import RightVertConnector from "./components/home-components/rightvertconn";
import DrawnLogo from "./components/home-components/drawnlogo";
import Timeline from "./components/home-components/timeline";

import './homeStyles.css'
import Image from "next/image"
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import GradientH1 from "./components/home-components/gradient-heading";
import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  const gallaryImgIDs_col1 = [
    "1qbIKmxV-mTcsYhNLWQhjay16jMR7fn1S",
    "1oZcow2RTckko4AKfLAHyw6sBjGFFtT5x",
    "1Qiy6LUy9bAVGCnQGQn6cR_oUfj5HKrT0"
  ]

  const gallaryImgIDs_col2 = [
    "1Q1mk4uk_bi5TkmzapC3DPx7QOgjpeUBU",
    "1OHjdO4sqVo9N9bnRlXDbIOfBfoqPwFMa",
    "11lMDA8ueORbCjOSLb8TGbl55xKF9FOjA"
  ]

  function Photobooth() {
    var { width, height } = getWindowDimensions();
    if (width > height) {
      return (
        <div className="photobooth">
          <Parallax speed={-10}>
            {gallaryImgIDs_col1.map((id, index) => (
              <div className="photo" key={index}>
                <img src={ "https://drive.google.com/uc?export=view&id="+id } alt={ "photo_"+index } />
              </div>
            ))}
          </Parallax>
          <Parallax speed={-20}>
            {gallaryImgIDs_col2.map((id, index) => (
              <div className="photo" key={index}>
                <img src={ "https://drive.google.com/uc?export=view&id="+id } alt={ "photo_"+index } />
              </div>
            ))}
          </Parallax>
        </div>
      )
    } else {
      return (
        <div className="photobooth">
          <Parallax speed={-10}>
            {gallaryImgIDs_col1.concat(gallaryImgIDs_col2).map((id, index) => (
              <div className="photo" key={index}>
                <img src={ "https://drive.google.com/uc?export=view&id="+id } alt={ "photo_"+index } />
              </div>
            ))}
          </Parallax>
        </div>
      )
    }
  }

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
        <Photobooth />
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

      <div className="container" id="teams">
        <div className="team1" onClick={() => window.location.href = "/teams/inertia" }>
          <div className="center" style={{ transform:"translate(-50%, -50%)" }}>
          <h1>Team I · Inertia</h1>
          <p>Mission: Create a new Type of Technology that Enables and Ensures of a Vertical Landing</p>
          <p>Importance in the Real World: The Proof of Concept will allow for a wide range of applications</p>
          </div>
        </div>

        <div className="team2" onClick={() => window.location.href = "/teams/project-aaer" }>
          <div className="center" style={{ transform:"translate(-50%, -50%)" }}>
          <h1>Team II · Project A.A.E.R.</h1>
          <p>- &#34;Artificial Acceleration of Ecosystem Restoration&#34;</p>
          <p>Mission: Artificially Assist & Speed Up the Environment to regain its state of Health</p>
          <p>Significance: Solution to Massive Destruction Events (i.e. Floods, Forest Fires)</p>
          </div>
        </div>
      </div>

      <div className="container">
        <Timeline/>
      </div>

      <div style={{ backgroundColor:"rgb(21,21,21)" }}>

        <div className="container" style={{ paddingBottom:0 }}>
          <GradientH1 style={{ fontSize:"4rem", paddingBottom:0, background:"linear-gradient(90deg, purple 0%, aqua 50%, #DAD2D8 100%)"}}>
            Our Sponsors
          </GradientH1>
        </div>
        <div className="container" style={{ padding:0 }}>
          <div className="sponsor">
            <img src={ "https://drive.google.com/uc?export=view&id=1iLmAUPxS_WUaA6BPehAs9EdVA63vZ4c1" } alt="sponsor1" />
            <p>Amsterdam International Community School</p>
          </div>
        </div>

        <div className="container" style={{ padding:0 }}>
          <GradientH1 style={{ fontSize:"4rem", paddingBottom:0, background:"linear-gradient(90deg, darkred 0%, red 50%, #DAD2D8 75%)"}}>
            Supporters
          </GradientH1>
        </div>
        <div className="container" style={{ paddingTop:0 }}>
          <div className="supporter">
            <img src={ "https://drive.google.com/uc?export=view&id=1iLmAUPxS_WUaA6BPehAs9EdVA63vZ4c1" } alt="supporter1" />
            <p>Amsterdam International Community School</p>
          </div>
          <div className="supporter">
            <img src={ "https://drive.google.com/uc?export=view&id=1-ijwidEOF1YFLUlCKnrYMpqq6YcN3kl1" } alt="supporter2" />
            <p>European Space Agency</p>
          </div>
          <div className="supporter">
            <img src={ "https://drive.google.com/uc?export=view&id=1_rvNyrdg-YAPzqxJ3_s8X-9UO5rtFUKT" } alt="supporter3" />
            <p>Delft Aerospace Rocket Engineering</p>
          </div>
        </div>

        <div className="container" style={{ padding:0 }}>
          <GradientH1 style={{ fontSize:"4rem", paddingBottom:0, background:"linear-gradient(90deg, brown 0%, gold 50%, #DAD2D8 75%)"}}>
            The Mentors
          </GradientH1>
        </div>
        <div className="container" style={{ paddingTop:0 }}>

          <div className="mentor">
            <img src={ "https://drive.google.com/uc?export=view&id=1r7BSCPSf_49JeYB9tz7Pa50UkZ1vxJhq" } alt="mentor1" />
            <p>Mr Matt Decovsky</p>
          </div>
          <div className="mentor">
            <img src={ "https://drive.google.com/uc?export=view&id=1mLy2VEFEPRmKjau9XULp-BX-DzPTke9a" } alt="mentor2" />
            <p>Grayson Hoare</p>
          </div>

        </div>
      </div>

      <div style={{ minHeight:"50vh", padding:"10vh 0", textAlign:"center" }}>
        <h1>Want to know More?</h1>
        <img src={ "https://drive.google.com/uc?export=view&id=1-vBrrFCIrNFedbToIUhim1CU5gmrOOSk" } alt="logo" style={{ width:"20vw" }}/>
        <div className="container" style={{ padding:0, width:"60vw", left:"50%", transform:"translateX(-50%)", position:"absolute", alignItems:"center" }}>
          <div style={{ padding:0 }}><a href="#teams">Teams Statuses</a></div>
          <div style={{ padding:0 }}><a href="/legacy">Our History</a></div>
          <div style={{ padding:0 }}><a href="#contact">Our Contact Info</a></div>
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