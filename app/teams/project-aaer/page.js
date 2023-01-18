'use client'

import "./aaer.css"

import {STLLoader} from 'three/examples/jsm/loaders/STLLoader'
import { Canvas, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'


export const Model = ({url}) => {
  const geom = useLoader(STLLoader, url);

  const ref = useRef();
  const {camera} = useThree();
  useEffect(() => {
      camera.lookAt(ref.current.position);
  });

  return (
      <>
        <mesh ref={ref}>
          <primitive object={geom} attach="geometry"/>
          <meshStandardMaterial color={"orange"}/>
        </mesh>
        <ambientLight/>
        <pointLight position={[10, 10, 10]}/>
      </>
  );
};

export default function TeamAAER() {
  return (
    <Canvas style={{ height:"80vh", width:"100vw" }}>
      <Model url="https://raw.githubusercontent.com/SPAICS/SPAICS.github.io/master/app/teams/project-aaer/models/paper.stl"/>
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