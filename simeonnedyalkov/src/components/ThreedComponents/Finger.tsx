import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export function Finger({ onLoaded, props }: any) {
  const { nodes, materials } = useGLTF("/3d/finger/scene.gltf") as any;
  useEffect(() => {
    if (onLoaded) onLoaded();
  }, [onLoaded]);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["Material.027"]}
        rotation={[Math.PI / 2, Math.PI / 4, 0]}
      />
    </group>
  );
}

useGLTF.preload("/scene.gltf");
