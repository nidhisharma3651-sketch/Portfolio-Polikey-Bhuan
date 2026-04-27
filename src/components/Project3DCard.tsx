import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Torus, Cone, OrbitControls, Sphere, Cylinder, Icosahedron } from '@react-three/drei';

function CityScene({ hovered }: { hovered: boolean }) {
  const group = useRef<any>(null);
  
  useFrame((state, delta) => {
    if (group.current && !hovered) {
       group.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Box args={[1.5, 0.05, 1.5]} position={[0, -0.6, 0]}>
          <meshStandardMaterial color="#f8fafc" />
        </Box>
        {/* Buildings */}
        <Box args={[0.3, 1, 0.3]} position={[-0.3, 0, -0.3]}>
          <meshStandardMaterial color="#93c5fd" wireframe={hovered} />
        </Box>
        <Box args={[0.4, 0.6, 0.4]} position={[0.4, -0.2, 0.2]}>
          <meshStandardMaterial color="#c4b5fd" wireframe={hovered} />
        </Box>
        <Box args={[0.25, 1.4, 0.25]} position={[-0.1, 0.2, 0.4]}>
          <meshStandardMaterial color="#fbcfe8" wireframe={hovered} />
        </Box>
      </Float>
    </group>
  );
}

function NetworkScene({ hovered }: { hovered: boolean }) {
  const group = useRef<any>(null);
  
  useFrame((state, delta) => {
    if (group.current) {
      if (!hovered) {
        group.current.rotation.y += delta * 0.2;
      } else {
        group.current.rotation.y += delta * 0.8;
      }
      group.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
        {/* AI Core */}
        <Sphere args={[0.3, 32, 32]} position={[0, 0, 0]}>
           <meshStandardMaterial color="#a78bfa" wireframe={hovered} />
        </Sphere>
        {/* Orbital rings */}
        <Torus args={[0.7, 0.02, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#c4b5fd" />
        </Torus>
        <Torus args={[0.7, 0.02, 16, 64]} rotation={[0, Math.PI / 2, 0]}>
          <meshStandardMaterial color="#ddd6fe" />
        </Torus>
        {/* Satellites */}
        <Sphere args={[0.08, 16, 16]} position={[0.7, 0, 0]}>
           <meshStandardMaterial color="#fbcfe8" />
        </Sphere>
        <Sphere args={[0.08, 16, 16]} position={[0, 0.7, 0]}>
           <meshStandardMaterial color="#93c5fd" />
        </Sphere>
        <Sphere args={[0.08, 16, 16]} position={[0, 0, 0.7]}>
           <meshStandardMaterial color="#6ee7b7" />
        </Sphere>
      </Float>
    </group>
  );
}

function HouseScene({ hovered }: { hovered: boolean }) {
  const group = useRef<any>(null);
  
  useFrame((state, delta) => {
    if (group.current && !hovered) {
      group.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Box args={[1, 1, 1]} position={[0, -0.2, 0]}>
          <meshStandardMaterial color="#6ee7b7" wireframe={hovered} />
        </Box>
        <Cone args={[0.9, 0.8, 4]} rotation={[0, Math.PI / 4, 0]} position={[0, 0.7, 0]}>
          <meshStandardMaterial color="#34d399" wireframe={hovered} />
        </Cone>
        <Box args={[0.3, 0.4, 0.05]} position={[0, -0.4, 0.51]}>
           <meshStandardMaterial color="#059669" />
        </Box>
      </Float>
    </group>
  );
}

function AudiobookScene({ hovered }: { hovered: boolean }) {
  const group = useRef<any>(null);
  const b1 = useRef<any>(null);
  const b2 = useRef<any>(null);
  const b3 = useRef<any>(null);
  const b4 = useRef<any>(null);
  const b5 = useRef<any>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const speed = hovered ? 3 : 1;
    if (b1.current) b1.current.scale.y = 1 + Math.sin(time * speed) * 0.5;
    if (b2.current) b2.current.scale.y = 1 + Math.sin(time * speed + 1) * 0.8;
    if (b3.current) b3.current.scale.y = 1 + Math.sin(time * speed + 2) * 1;
    if (b4.current) b4.current.scale.y = 1 + Math.sin(time * speed + 3) * 0.8;
    if (b5.current) b5.current.scale.y = 1 + Math.sin(time * speed + 4) * 0.5;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Box ref={b1} args={[0.2, 1, 0.2]} position={[-0.6, 0, 0]}>
          <meshStandardMaterial color="#fcd34d" wireframe={hovered} />
        </Box>
        <Box ref={b2} args={[0.2, 1, 0.2]} position={[-0.3, 0, 0]}>
          <meshStandardMaterial color="#fba918" wireframe={hovered} />
        </Box>
        <Box ref={b3} args={[0.2, 1, 0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#f87171" wireframe={hovered} />
        </Box>
        <Box ref={b4} args={[0.2, 1, 0.2]} position={[0.3, 0, 0]}>
          <meshStandardMaterial color="#fba918" wireframe={hovered} />
        </Box>
        <Box ref={b5} args={[0.2, 1, 0.2]} position={[0.6, 0, 0]}>
          <meshStandardMaterial color="#fcd34d" wireframe={hovered} />
        </Box>
      </Float>
    </group>
  );
}

function NotifierScene({ hovered }: { hovered: boolean }) {
  const group = useRef<any>(null);
  const ring1 = useRef<any>(null);
  const ring2 = useRef<any>(null);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    if (group.current && !hovered) {
      group.current.rotation.y += delta * 0.5;
    }
    if (ring1.current) {
       ring1.current.scale.setScalar(1 + (time % 2) * (hovered ? 1.5 : 0.5));
       ring1.current.material.opacity = Math.max(0, 1 - (time % 2));
       ring1.current.material.transparent = true;
    }
    if (ring2.current) {
       const t2 = (time + 1) % 2;
       ring2.current.scale.setScalar(1 + t2 * (hovered ? 1.5 : 0.5));
       ring2.current.material.opacity = Math.max(0, 1 - t2);
       ring2.current.material.transparent = true;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[0.3, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#60a5fa" />
        </Sphere>
        <Torus ref={ring1} args={[0.4, 0.02, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#93c5fd" />
        </Torus>
        <Torus ref={ring2} args={[0.4, 0.02, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#bfdbfe" />
        </Torus>
      </Float>
    </group>
  );
}

function PortfolioScene({ hovered }: { hovered: boolean }) {
  const group = useRef<any>(null);
  
  useFrame((state, delta) => {
    if (group.current) {
      if (!hovered) {
        group.current.rotation.y += delta * 0.2;
      } else {
        group.current.rotation.y += delta * 0.8;
      }
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Box args={[1.2, 0.8, 0.05]} position={[0, 0.2, -0.4]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#c084fc" wireframe={hovered} />
        </Box>
        <Box args={[0.8, 0.6, 0.05]} position={[-0.5, -0.2, 0.2]} rotation={[0, 0.2, 0]}>
          <meshStandardMaterial color="#e879f9" wireframe={hovered} />
        </Box>
        <Box args={[0.8, 0.6, 0.05]} position={[0.5, -0.2, 0.4]} rotation={[0, -0.2, 0]}>
          <meshStandardMaterial color="#f472b6" wireframe={hovered} />
        </Box>
      </Float>
    </group>
  );
}

function ZarvisScene({ hovered }: { hovered: boolean }) {
  const group = useRef<any>(null);
  const inner = useRef<any>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * (hovered ? 1.0 : 0.2);
      group.current.rotation.x += delta * 0.1;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * (hovered ? 1.5 : 0.5);
      inner.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron args={[0.8, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#fb923c" wireframe={true} />
        </Icosahedron>
        <Icosahedron ref={inner} args={[0.4, 0]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#fcd34d" wireframe={hovered} />
        </Icosahedron>
      </Float>
    </group>
  );
}

function VRShooterScene({ hovered }: { hovered: boolean }) {
  const group = useRef<any>(null);
  const target1 = useRef<any>(null);
  const target2 = useRef<any>(null);
  const target3 = useRef<any>(null);

  useFrame((state, delta) => {
    if (group.current && !hovered) {
      group.current.rotation.y += delta * 0.1;
    }
    const time = state.clock.elapsedTime;
    if (target1.current) target1.current.rotation.x = hovered ? 0 : Math.sin(time) > 0.5 ? Math.PI / 2 : 0;
    if (target2.current) target2.current.rotation.x = hovered ? 0 : Math.sin(time + 2) > 0.5 ? Math.PI / 2 : 0;
    if (target3.current) target3.current.rotation.x = hovered ? 0 : Math.sin(time + 4) > 0.5 ? Math.PI / 2 : 0;
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Box args={[0.8, 0.4, 0.2]} position={[0, -0.2, 0.6]} rotation={[-Math.PI / 6, 0, 0]}>
           <meshStandardMaterial color="#a1a1aa" wireframe={hovered} />
        </Box>
        <Cylinder args={[0.05, 0.05, 0.6]} position={[0, 0.1, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
           <meshStandardMaterial color="#d4d4d8" wireframe={hovered} />
        </Cylinder>
        
        {/* Targets */}
        <group position={[-0.8, 0.5, -0.5]} ref={target1}>
           <Cylinder args={[0.2, 0.2, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#f472b6" wireframe={hovered} />
           </Cylinder>
        </group>
        <group position={[0, 0.2, -0.8]} ref={target2}>
           <Cylinder args={[0.2, 0.2, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#c084fc" wireframe={hovered} />
           </Cylinder>
        </group>
        <group position={[0.8, 0.6, -0.4]} ref={target3}>
           <Cylinder args={[0.2, 0.2, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#60a5fa" wireframe={hovered} />
           </Cylinder>
        </group>
      </Float>
    </group>
  );
}

function SceneFactory({ id, hovered }: { id: string, hovered: boolean }) {
  switch (id) {
    case 'urban': return <CityScene hovered={hovered} />;
    case 'genie': return <NetworkScene hovered={hovered} />;
    case 'house': return <HouseScene hovered={hovered} />;
    case 'audiobook': return <AudiobookScene hovered={hovered} />;
    case 'notifier': return <NotifierScene hovered={hovered} />;
    case 'portfolio': return <PortfolioScene hovered={hovered} />;
    case 'zarvis': return <ZarvisScene hovered={hovered} />;
    case 'vr-shooter': return <VRShooterScene hovered={hovered} />;
    default: return <CityScene hovered={hovered} />;
  }
}

export default function Project3DCard({ id, hovered }: { id: string, hovered: boolean }) {
  return (
    <div className="w-full h-full relative z-0">
      <Canvas 
        camera={{ position: [0, 0, 3.5], fov: 45 }} 
        dpr={[1, 1.5]} 
        frameloop={hovered ? "always" : "demand"}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#c4b5fd" />
        <SceneFactory id={id} hovered={hovered} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
