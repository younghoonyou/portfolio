// import React, {useEffect, Suspense} from 'react'
// import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { useLoader } from '@react-three/fiber';
// const Room = (props) => {
//     const {scene} = useLoader(GLTFLoader, '/assets/room.glb');
//     useEffect(() => {
//         scene.traverse((child) => {
//           if (child.isMesh) {
//             child.material.color.set(0xffffff); // Set material color to white
//           }
//         });
//       }, [scene]);
//   return (
//       <>
//           <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} />
//       <pointLight position={[10, 10, 10]} />
//       <Suspense fallback={null}>
//         <primitive object={scene} scale={1} dispose={null} />
//         <Environment preset="sunset" />
//       </Suspense>
//       <OrbitControls />
//       </>
//   )
// }

// useGLTF.preload('/assets/room.glb')

// export default Room;

import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
function Room(props) {
    const { scene } = useLoader(GLTFLoader, '/assets/room.glb');

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                if (!child.material) {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0xffffff,
                    });
                }
                child.material.needsUpdate = true;
            }
        });
    }, [scene]);

    return (
        <>
            {/* <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}> */}
            <primitive object={scene} scale={1} />
            {/* <Environment preset="sunset" />
      </Suspense>
      <OrbitControls /> */}
        </>
    );
}

useGLTF.preload('/assets/room.glb');

export default Room;
