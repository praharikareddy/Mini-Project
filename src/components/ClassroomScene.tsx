import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ClassroomBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.5, 1.5, 2]} />
      <meshStandardMaterial
        color="#3b82f6"
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
}

function Desk({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.4, 0.05, 0.3]} />
      <meshStandardMaterial color="#06b6d4" transparent opacity={0.6} />
    </mesh>
  );
}

function Fan({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 8;
  });
  return (
    <mesh ref={ref} position={position}>
      <cylinderGeometry args={[0.2, 0.2, 0.02, 3]} />
      <meshStandardMaterial color="#a855f7" transparent opacity={0.7} />
    </mesh>
  );
}

const ClassroomScene = () => (
  <div className="w-full h-[300px] md:h-[400px]">
    <Canvas camera={{ position: [3, 2, 3], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[-3, 2, -2]} intensity={0.4} color="#a855f7" />
      <ClassroomBox />
      <Desk position={[-0.6, -0.5, -0.3]} />
      <Desk position={[0.6, -0.5, -0.3]} />
      <Desk position={[-0.6, -0.5, 0.4]} />
      <Desk position={[0.6, -0.5, 0.4]} />
      <Fan position={[-0.5, 0.7, 0]} />
      <Fan position={[0.5, 0.7, 0]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  </div>
);

export default ClassroomScene;
