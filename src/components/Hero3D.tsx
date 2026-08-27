"use client";

import { Canvas } from "@react-three/fiber";
import {
    ContactShadows,
    Environment,
    Float,
    OrbitControls,
    useGLTF,
} from "@react-three/drei";

function ManModel() {
    const { scene } = useGLTF("/models/man.glb");

    return (
        <primitive
            object={scene}
            scale={1.5}
            position={[0, -0.2, 0]}
        />
    );
}

export default function Hero3D() {
    return (
        <Canvas
            dpr={[1, 1.5]}
            camera={{
                position: [0, 0, 5],
                fov: 45,
            }}
            gl={{
                antialias: true,
                powerPreference: "high-performance",
            }}
        >
            {/* Lighting */}
            <ambientLight intensity={1.2} />

            <directionalLight
                position={[5, 5, 5]}
                intensity={1.8}
            />

            <pointLight
                position={[-3, 2, 2]}
                intensity={1.5}
                color="#8b5cf6"
            />

            {/* Environment */}
            <Environment preset="city" />

            {/* 3D Drone */}
            <Float
                speed={1.5}
                rotationIntensity={0.25}
                floatIntensity={0.6}
            >
                <ManModel />
            </Float>

            {/* Shadow */}
            <ContactShadows
                position={[0, -1.5, 0]}
                opacity={0.4}
                scale={4}
                blur={2}
            />

            {/* Mouse / Auto Rotation */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0}
            />
        </Canvas>
    );
}

useGLTF.preload("/models/man.glb");