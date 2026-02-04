import { Canvas } from "@react-three/fiber";

function Rink() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[60, 30]} />
      <meshStandardMaterial color="#e8f4ff" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 20, 20], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 20, 10]} />
      <Rink />
    </Canvas>
  );
}
