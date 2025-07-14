import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Box, Sphere, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function AnimatedDomain({ position, text, color }: { position: [number, number, number], text: string, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <group position={position}>
      <Box ref={meshRef} args={[1.5, 0.8, 0.3]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Text
        position={[0, 0, 0.2]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}

function TokenizedDomain({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Sphere args={[0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#00ffff" emissive="#004444" />
      </Sphere>
      <Sphere args={[1.2]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#00ffff" transparent opacity={0.1} />
      </Sphere>
      <Text
        position={[0, 0, 1]}
        fontSize={0.15}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
      >
        NFT
      </Text>
    </group>
  );
}

export function DomainVisualization() {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        
        {/* Traditional Domains */}
        <AnimatedDomain position={[-4, 1, 0]} text="example.com" color="#666666" />
        <AnimatedDomain position={[-4, -1, 0]} text="mysite.org" color="#666666" />
        
        {/* Arrow or Bridge */}
        <Box position={[0, 0, 0]} args={[2, 0.1, 0.1]}>
          <meshStandardMaterial color="#00ffff" emissive="#002222" />
        </Box>
        
        {/* Tokenized Domains */}
        <TokenizedDomain position={[4, 0.5, 0]} />
        <TokenizedDomain position={[4, -0.5, 0]} />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}