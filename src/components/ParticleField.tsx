'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const COUNT = 500;
const CONNECT = 120;

function Particles() {
  const points = useRef<THREE.Points>(null!);
  const lineGeom = useRef<THREE.BufferGeometry>(null!);

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      velocities[i * 3] = (Math.random() - 0.5) * 0.008;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.004;
    }
    return { positions, velocities };
  }, []);

  const linePositions = useMemo(() => new Float32Array(COUNT * COUNT * 6), []);

  useFrame(() => {
    if (!points.current) return;
    const pos = points.current.geometry.attributes.position as THREE.BufferAttribute;
    let lineIndex = 0;

    for (let i = 0; i < COUNT; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        const idx = i * 3 + j;
        pos.array[idx] += velocities[idx];
        if (Math.abs(pos.array[idx]) > 12) velocities[idx] *= -1;
      }
    }
    pos.needsUpdate = true;

    for (let i = 0; i < COUNT; i += 1) {
      for (let j = i + 1; j < COUNT; j += 1) {
        const dx = pos.array[i * 3] - pos.array[j * 3];
        const dy = pos.array[i * 3 + 1] - pos.array[j * 3 + 1];
        const dz = pos.array[i * 3 + 2] - pos.array[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECT) {
          linePositions[lineIndex++] = pos.array[i * 3];
          linePositions[lineIndex++] = pos.array[i * 3 + 1];
          linePositions[lineIndex++] = pos.array[i * 3 + 2];
          linePositions[lineIndex++] = pos.array[j * 3];
          linePositions[lineIndex++] = pos.array[j * 3 + 1];
          linePositions[lineIndex++] = pos.array[j * 3 + 2];
        }
      }
    }

    if (lineGeom.current) {
      lineGeom.current.setAttribute(
        'position',
        new THREE.BufferAttribute(linePositions.slice(0, lineIndex), 3),
      );
      lineGeom.current.computeBoundingSphere();
    }
  });

  return (
    <>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#00D4FF" transparent opacity={0.2} />
      </points>
      <lineSegments>
        <bufferGeometry ref={lineGeom} />
        <lineBasicMaterial color="#ffffff" transparent opacity={0.12} />
      </lineSegments>
    </>
  );
}

export default function ParticleField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 opacity-20" aria-hidden>
      <Canvas camera={{ position: [0, 0, 10], fov: 55 }} dpr={[1, 1]}>
        <Particles />
      </Canvas>
    </div>
  );
}
