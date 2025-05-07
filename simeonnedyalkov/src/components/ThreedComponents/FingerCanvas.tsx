import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Finger } from "./Finger";

export default function FingerCanvas({ onLoaded }: { onLoaded?: () => void }) {
  return (
    <Canvas>
      <Suspense fallback="...loading">
        <ambientLight />
        <directionalLight
          castShadow
          position={[0, -1, 0]}
          intensity={0.8}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.005}
        />
        <Stage environment="night" intensity={0.2}>
          <Finger onLoaded={onLoaded} />
        </Stage>
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        ></OrbitControls>
        <PerspectiveCamera position={[0, 5, 25]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
}
