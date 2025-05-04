import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";
export default function Blob() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <Sphere args={[1, 50, 100]} scale={2}>
            <MeshDistortMaterial
              color="#fee715"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          <ambientLight intensity={0.2} />
          <directionalLight color="#fee715" position={[1, 2, 3]} />
          <OrbitControls enableZoom={false} />
        </mesh>
      </Canvas>
    </div>
  );
}
