import { Bounds, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/Lights";
import { RaymarchedScene } from "./Raymarching/RaymarchedScene";
import { RegularScene } from "./RegularScene";

export default function App() {
  return (
    <>
      <Canvas shadows>
        <OrbitControls makeDefault />
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        <Lights />

        <RaymarchedScene />
        <RegularScene />

        <Bounds fit observe>
          <mesh>
            <boxGeometry args={[4, 4, 4]} />
            <meshStandardMaterial color="orange" visible={false} />
          </mesh>
        </Bounds>
      </Canvas>
    </>
  );
}
