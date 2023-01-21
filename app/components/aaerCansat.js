import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function CanSat() {
    const mesh = useRef()
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005))
    
    const model = useLoader(GLTFLoader, "/models/space_shuttle.glb")

    return (
        <mesh
            ref={mesh}
            position={[0, 0, 0]}
            scale={[1, 1, 1]}
        >
            <primitive object={model.scene} scale={5} position={[0, 0, 0]} rotation={[0, 0, 0]} />
        </mesh>
    )
}

export default function CansatModel() {
    return (
        <Canvas style={{ height: "90vh", width: "90vw", border: "1px white solid" }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <CanSat />
        </Canvas>
    )
}