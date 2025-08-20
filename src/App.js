import './App.css';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Html } from '@react-three/drei';
import { useSelector } from 'react-redux';
import Room from './components/Room';
import Stepper from './components/Stepper';
import * as THREE from 'three';

const App = () => {
    const [bgColor, setBgColor] = useState(true);
    const target = useSelector((state) => state.camera.target);

    const cameraPosition = useSelector((state) => state.camera.position);
    const cameraVector = new THREE.Vector3(
        cameraPosition.x,
        cameraPosition.y,
        cameraPosition.z,
    );

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                position: 'fixed',
            }}
        >
            <Canvas
                style={{
                    background: bgColor
                        ? 'radial-gradient(circle, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
                        : 'radial-gradient(circle, #f9f7f7 0%, #dbe2ef 50%, #3f72af 100%)',
                }}
                camera={{ position: cameraVector, fov: 50 }}
            >
                <Html
                    position={[0, 5, 0]}
                    rotation={[0, Math.PI / 4, 0]}
                    style={{
                        backgroundColor: bgColor
                            ? 'rgba(15, 52, 96, 0.8)'
                            : 'rgba(219, 226, 239, 0.9)',
                        color: bgColor ? '#f9f7f7' : '#16213e',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        fontFamily: 'Poppins, sans-serif',
                        maxWidth: '300px',
                        display: target !== 'init' ? 'none' : 'block',
                    }}
                    transform
                    occlude
                >
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ margin: '0 0 10px 0' }}>
                            Welcome to Hoon space
                        </h2>
                        <p style={{ margin: 0 }}>Work & Project & Contacts</p>
                    </div>
                </Html>
                <fog
                    attach="fog"
                    color={bgColor ? '#16213e' : '#dbe2ef'}
                    near={15}
                    far={30}
                />

                <Stage preset="rembrandt" intensity={1} environment="sunset">
                    <ambientLight intensity={2} />
                    <pointLight
                        position={[0, 5, 0]}
                        intensity={0.8}
                        color={bgColor ? '#ff9e7d' : '#ffd89b'}
                    />
                    <Suspense fallback={null}>
                        <Room bgColor={bgColor} setBgColor={setBgColor} />
                    </Suspense>
                </Stage>
                <OrbitControls
                    target={cameraVector}
                    enableZoom={false}
                    enablePan={false}
                    rotateSpeed={0.3}
                    dampingFactor={0.1}
                    enabled={true}
                />
            </Canvas>
            <Stepper bgColor={bgColor} />
        </div>
    );
};

export default App;
