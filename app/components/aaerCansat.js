import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"

function CanSat() {
    const mesh = useRef()
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005))
    return (
        <mesh
            ref={mesh}
            position={[0, 0, 0]}
            scale={[1, 1, 1]}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color="hotpink" />
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