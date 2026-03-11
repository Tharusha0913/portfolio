"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, PerspectiveCamera, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function FloatingObject() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle swaying rotation
            groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
            groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
        }
    });

    const links = [];
    const linkCount = 15;

    for (let i = 0; i < linkCount; i++) {
        links.push(
            <mesh
                key={i}
                position={[0, 1.2 + i * 0.25, 0]}
                rotation={[i % 2 === 0 ? Math.PI / 2 : 0, 0, 0]}
            >
                <torusGeometry args={[0.12, 0.03, 16, 32]} />
                <meshStandardMaterial color="#888" metalness={0.8} roughness={0.2} />
            </mesh>
        );
    }

    return (
        <Float
            speed={2}
            rotationIntensity={0.2}
            floatIntensity={0.5}
            floatingRange={[-0.1, 0.1]}
        >
            <group ref={groupRef}>
                {/* Main Object - Abstract Metallic Shape */}
                <mesh position={[0, 0, 0]}>
                    <torusKnotGeometry args={[0.6, 0.2, 128, 32]} />
                    <meshPhysicalMaterial
                        color="#ffffff"
                        metalness={1}
                        roughness={0.1}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        envMapIntensity={1.5}
                    />
                </mesh>

                {/* Chain attached to top */}
                <group position={[0, 0.6, 0]}>
                    {links}
                </group>
            </group>
        </Float>
    );
}

function BackgroundEffect() {
    return (
        <mesh position={[0, 0, -5]} scale={15}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial
                color="#001133"
                emissive="#1e90ff" // Dodger Blue
                emissiveIntensity={0.5}
                roughness={0.2}
                metalness={1}
                distort={0.4}
                speed={2}
            />
        </mesh>
    );
}

export default function Hero3DScene() {
    return (
        <div className="w-full h-full bg-black flex items-center justify-center">
            <Canvas
                gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 6]} />

                    {/* Stronger, more comprehensive lighting */}
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
                    <pointLight position={[10, 10, 10]} intensity={3} color="#4455ff" />
                    <pointLight position={[-10, -10, -10]} intensity={2} color="#ff00aa" />
                    <spotLight position={[0, 10, 0]} intensity={2} angle={0.3} penumbra={1} color="#ffffff" />

                    <group position={[0, -0.5, 0]}>
                        <FloatingObject />
                    </group>

                    <BackgroundEffect />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}
