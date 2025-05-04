import { Canvas } from "@react-three/fiber";
import { CatDate } from "../ThreedComponents/CatDate";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

export default function LaptopCanvas() {
  return (
    <Canvas>
      <Suspense fallback="...loading">
        <Stage environment="night" intensity={0.5}>
          <CatDate />
        </Stage>
        <OrbitControls enableZoom={false}></OrbitControls>
        <PerspectiveCamera position={[-5, 0, 1]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
}
