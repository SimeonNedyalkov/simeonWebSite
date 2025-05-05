import { useGLTF } from "@react-three/drei";
// import computerScene from "/3d/scene.gltf";

export function EarthTresureVault({ props }: any) {
  const { nodes, materials } = useGLTF(
    "/3d/earthTresureVault/scene.gltf"
  ) as any;
  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </group>
  );
}
