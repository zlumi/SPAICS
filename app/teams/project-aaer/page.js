'use client'

import "./aaer.css"

import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { React, useRef, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function TeamAAER() {
  const model_1 = useLoader(
    GLTFLoader, 'https://raw.githubusercontent.com/zLuminate/SPAICS/main/app/teams/project-aaer/models/paper.gltf'
  )

  return (
    <Canvas style={{ height:"80vh", width:"100vw" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} />
      <group position={[0, -1, 0]}>
        <mesh
          geometry={model_1.scene.children[0].geometry}
          material={model_1.scene.children[0].material}
          position={[0, 0, 0]}
          scale={[0.1, 0.1, 0.1]}
        />
      </group>
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