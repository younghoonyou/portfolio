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
                style={{ background: bgColor ? 'black' : 'white' }}
                camera={{ position: cameraVector, fov: 50 }}
            >
                <Html
                    position={[0, 4, 0]}
                    rotation={[0, Math.PI / 4, 0]}
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        padding: '10px',
                        borderRadius: '5px',
                        display: target !== 'init' ? 'none' : 'block',
                    }}
                    transform
                    occlude
                >
                    I'm Younghoon Yu, a passionate developer.
                </Html>
                <Stage preset="rembrandt" intensity={1} environment="sunset">
                    <ambientLight intensity={2} />
                    <Suspense fallback={null}>
                        <Room bgColor={bgColor} setBgColor={setBgColor} />
                    </Suspense>
                </Stage>
                <OrbitControls />
            </Canvas>
            <Stepper bgColor={bgColor} />
        </div>
    );
};

export default App;
