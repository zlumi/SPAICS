'use client'

import "./aaer.css"

import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'


function Box() {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry/>
      <meshStandardMaterial color={0xff00ff} />
    </mesh>
  )
}

export default function TeamAAER() {
  return (
    <Canvas style={{ height:"80vh", width:"100vw" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]}/>
      <Box/>
    </Canvas>
  )
}

// <div id="TeamAAER">
    //   <div style={{ height:"calc(90vh - 3rem)", backgroundColor:"#1F282D", position:"relative" }}>
    //     <div className="center" style={{ transition:".5s" }}>
    //       <p style={{ textAlign:"left", animationDelay:".5s" }} id="aaerSubHeading">NL CanSat Competition Team</p>
    //       <h1 id="aaerHeading">SPAICS Project AAER</h1>
    //       <p style={{ textAlign:"right", animationDelay:".75s" }} id="aaerSubHeading">Artificial Acceleration of Ecosystem Restoration</p>
    //     </div>
    //   </div>
    //   <div id="aaerContent">

    //     <h1>The Idea</h1>
    //     <p></p>

    //     <h1>The Mission</h1>
    //     <p></p>

    //     <h1>The Values</h1>
    //     <p></p>

    //   </div>
    // </div>