import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, TorusKnot, Stars, Box, Icosahedron, MeshTransmissionMaterial, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGlassNode({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() + position[0]) * 0.5;
    }
  });

  return (
    <Icosahedron args={[1, 0]} position={position} scale={scale} ref={ref}>
      <meshPhysicalMaterial 
        transmission={0.9} 
        opacity={1} 
        transparent={true}
        roughness={0.1} 
        ior={1.5} 
        thickness={2} 
        color="#a855f7" 
      />
    </Icosahedron>
  );
}

export default function WebGLBackground() {
  const groupRef = useRef<THREE.Group>(null);
  const knotRef = useRef<THREE.Mesh>(null);
  const wireKnotRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.05) * 0.2;
      groupRef.current.rotation.x = Math.cos(time * 0.05) * 0.1;
    }
    if (knotRef.current && wireKnotRef.current) {
      knotRef.current.rotation.x = time * 0.1;
      knotRef.current.rotation.y = time * 0.15;
      wireKnotRef.current.rotation.x = time * 0.1;
      wireKnotRef.current.rotation.y = time * 0.15;
    }
    
    // Parallax effect based on mouse (mapped roughly)
    if (state.camera) {
       state.camera.position.x += (state.pointer.x * 2 - state.camera.position.x) * 0.05;
       state.camera.position.y += (state.pointer.y * 2 - state.camera.position.y) * 0.05;
       state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={groupRef}>
      <color attach="background" args={['#030303']} />
      <fog attach="fog" args={['#030303', 5, 30]} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#8b5cf6" />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#ec4899" />
      <pointLight position={[0, 0, 0]} intensity={2} color="#3b82f6" distance={10} />
      
      <Environment preset="city" />
      
      {/* Background Starfield & Particles */}
      <Stars radius={15} depth={50} count={1200} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={100} scale={20} size={1.5} speed={0.4} color="#a855f7" opacity={0.4} />
      <Sparkles count={80} scale={15} size={2.5} speed={0.2} color="#3b82f6" opacity={0.3} />

      {/* Central Abstract Structure */}
      <group position={[0, 0, -2]} scale={1.5}>
        <TorusKnot ref={knotRef} args={[2, 0.6, 128, 16]}>
          <meshPhysicalMaterial 
            color="#050505" 
            roughness={0.1} 
            metalness={0.8} 
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={2}
          />
        </TorusKnot>
        
        {/* Glowy Wireframe overlay for the structure */}
        <TorusKnot ref={wireKnotRef} args={[2.02, 0.61, 64, 16]}>
          <meshBasicMaterial color="#a855f7" wireframe={true} transparent opacity={0.15} />
        </TorusKnot>
      </group>

      {/* Floating Glass Nodes */}
      <FloatingGlassNode position={[-6, 3, -4]} scale={1.2} />
      <FloatingGlassNode position={[7, 1, -2]} scale={1.8} />
      <FloatingGlassNode position={[-5, -4, -6]} scale={1.5} />
      <FloatingGlassNode position={[6, -5, -3]} scale={2} />
      <FloatingGlassNode position={[0, 5, -8]} scale={3} />
    </group>
  );
}
