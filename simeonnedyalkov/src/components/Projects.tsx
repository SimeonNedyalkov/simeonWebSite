import { Canvas } from "@react-three/fiber";
import { CatDate } from "./ThreedComponents/CatDate";
import * as THREE from "three";
import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
export default function Projects() {
  return (
    <div>
      <div className="projectsContainer">Hello!</div>
      <Canvas>
        <Suspense fallback="...loading">
          <Stage environment="city">
            <CatDate />
          </Stage>
          <OrbitControls enableZoom={false}></OrbitControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
