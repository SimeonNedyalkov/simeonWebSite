import { Canvas } from "@react-three/fiber";
import { CatDate } from "../ThreedComponents/CatDate";
import * as THREE from "three";
import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
export default function LaptopCanvas() {
  return (
    <Canvas>
      <Suspense fallback="...loading">
        <Stage environment="apartment">
          <CatDate />
        </Stage>
        <OrbitControls enableZoom={false}></OrbitControls>
      </Suspense>
    </Canvas>
  );
}
