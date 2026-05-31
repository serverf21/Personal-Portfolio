'use client';

import { Html } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLOBE_SKILLS } from '@/lib/constants';

function fibonacciSphere(count: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points.push(
      new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius),
    );
  }
  return points;
}

function GlobeGroup({
  paused,
  onHover,
}: {
  paused: boolean;
  onHover: (v: boolean) => void;
}) {
  const group = useRef<THREE.Group>(null!);
  const positions = useMemo(() => fibonacciSphere(GLOBE_SKILLS.length, 2.1), []);

  useFrame((_, delta) => {
    if (!group.current || paused) return;
    group.current.rotation.y += delta * 0.35;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.85, 48, 48]} />
        <meshStandardMaterial color="#111110" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.82, 32, 32]} />
        <meshPhysicalMaterial
          color="#0a0a0a"
          metalness={0.4}
          roughness={0.5}
          transparent
          opacity={0.35}
        />
      </mesh>
      {GLOBE_SKILLS.map((skill, i) => (
        <Html
          key={skill.name}
          position={positions[i]}
          center
          distanceFactor={8}
          style={{ pointerEvents: 'auto' }}
        >
          <button
            type="button"
            className="interactive whitespace-nowrap rounded-full border border-white/20 bg-canvas-dark/90 px-3 py-1 font-mono text-xs text-ink-dark backdrop-blur-sm transition hover:scale-105 hover:border-forge-cyan hover:shadow-glow-cyan"
            style={{ boxShadow: `0 0 12px ${skill.color}33` }}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            onFocus={() => onHover(true)}
            onBlur={() => onHover(false)}
          >
            {skill.name}
          </button>
        </Html>
      ))}
    </group>
  );
}

export default function SkillsGlobe() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="h-[min(420px,55vw)] w-full min-h-[280px]">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1.1} color="#00D4FF" />
        <pointLight position={[-4, -3, 2]} intensity={0.5} color="#FF6B35" />
        <GlobeGroup paused={paused} onHover={setPaused} />
      </Canvas>
    </div>
  );
}
