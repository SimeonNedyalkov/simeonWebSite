import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CatDate } from "../ThreedComponents/CatDate";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Lenion } from "./Lenion";
import { arrayOfThreeDs } from "@/constants/constants";
type LaptopCanvasProps = {
  projectId: number;
};

export default function LaptopCanvas({ projectId }: LaptopCanvasProps) {
  const selectedProject = arrayOfThreeDs.find(
    (project) => project.id === projectId
  );
  return (
    <Canvas>
      <Suspense fallback="...loading">
        <Stage environment="night" intensity={0.5}>
          {selectedProject?.component}
        </Stage>
        <OrbitControls enableZoom={false}></OrbitControls>
        <PerspectiveCamera position={[-5, 0, 1]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
}
