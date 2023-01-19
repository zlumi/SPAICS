'use client'

import "./aaer.css"

import React, { useState, useEffect } from 'react'
import { MotionH1, MotionP } from "../../components/motionTexts"

export default function TeamAAER() {
  return(
    <div id="TeamAAER">
      <div style={{ height:"calc(100vh - 6rem)", position:"relative", marginBottom:"3rem" }}>
        <div style={{ position:"absolute", top:"50%", transform:"translateY(-50%)" }}>
          <h2 style={{ animationDelay:"1s", padding:0, margin:0 }} id="aaerSubHeading">NL CanSat Competition Team</h2>
          <h1 id="aaerHeading" style={{ animationDelay:"1.25s", padding:0, lineHeight:"150%" }}>SPAICS Project AAER</h1>
          <h2 style={{ animationDelay:"2.5s", padding:0, margin:0, marginBottom:"5vh" }} id="aaerSubHeading">Artificial Acceleration of Ecosystem Restoration</h2>
        </div>
      </div>

      <div className="page">
        <MotionH1>The Idea</MotionH1>
        <MotionP>Some random text here just some more random text that will take up the space of so much random text that you will finally become a random text of the randomest things in the random texts. Lets see how much random text I can type before the random texts can no longer be random and a pattern of randomness starts emerging; randomness; random; all across the random randoms. Random random random and random are the randoms.</MotionP>
      </div>

      <div className="page">
        <MotionH1>The Mission</MotionH1>
        <MotionP>Some random text here just some more random text that will take up the space of so much random text that you will finally become a random text of the randomest things in the random texts. Lets see how much random text I can type before the random texts can no longer be random and a pattern of randomness starts emerging; randomness; random; all across the random randoms. Random random random and random are the randoms.</MotionP>
      </div>

      <div className="page">
        <MotionH1>The Values</MotionH1>
        <MotionP>Some random text here just some more random text that will take up the space of so much random text that you will finally become a random text of the randomest things in the random texts. Lets see how much random text I can type before the random texts can no longer be random and a pattern of randomness starts emerging; randomness; random; all across the random randoms. Random random random and random are the randoms.</MotionP>
      </div>

    </div>
  )
}