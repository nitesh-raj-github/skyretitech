"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Sculpture() {
  const ref = useRef<Mesh | null>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0018;
    }
  });

  return (
    <mesh
  ref={ref}
  rotation={[0.35, 0, 0]}
  scale={0.85}   // 👈 reduces size ~15%
>
  <torusKnotGeometry args={[1, 0.28, 180, 32]} />
  <meshStandardMaterial
    color="#e5e7eb"
    roughness={0.45}
    metalness={0.12}
  />
</mesh>

  );
}

export default function HeroScene() {
  return (
    <div className="h-[220px] w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[6, 6, 6]} intensity={0.8} />
          <directionalLight position={[-6, -4, 2]} intensity={0.3} />

          {/* Object */}
          <Sculpture />

          {/* Clean studio reflections */}
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
