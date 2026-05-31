'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function CrystalMesh({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.25;
    const targetX = mouse.current.y * 0.35;
    const targetY = mouse.current.x * 0.45;
    mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.05;
    mesh.current.rotation.y += (targetY - mesh.current.rotation.y) * 0.05;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.35, 1]} />
      <meshPhysicalMaterial
        color="#111110"
        emissive="#00D4FF"
        emissiveIntensity={0.35}
        metalness={0.55}
        roughness={0.25}
        transparent
        opacity={0.92}
      />
    </mesh>
  );
}

function OrbitParticles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 260;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const r = 2 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.12;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00D4FF" transparent opacity={0.75} sizeAttenuation />
    </points>
  );
}

function DemandLoop() {
  const { invalidate } = useThree();
  useFrame(() => invalidate());
  return null;
}

function Scene({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  return (
    <>
      <DemandLoop />
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 5]} intensity={0.9} />
      <directionalLight position={[-3, -2, -4]} intensity={0.35} color="#FF6B35" />
      <CrystalMesh mouse={mouse} />
      <OrbitParticles />
    </>
  );
}

export default function HeroCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  const onPointerMove = (e: React.PointerEvent) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <div className="absolute inset-0 -z-10" onPointerMove={onPointerMove} aria-hidden>
      <Canvas
        frameloop="demand"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        style={{ background: 'transparent' }}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
}
