import React, { useEffect, useState } from 'react';
import { useGLTF, Edges, Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import ProjectDetail from './Projects';
import { useDispatch, useSelector } from 'react-redux';
import * as THREE from 'three';
import { setCamera } from '../reducer/cameraReducer';

const CONTACT_URL = {
    gmail: 'mailto:0623hoon@gmail.com',
    github: 'https://www.github.com/younghoonyou',
    linkedin: 'https://www.linkedin.com/in/younghoonyu',
};

const HoverableMesh = ({
    onClick,
    geometry,
    material,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = [1, 1, 1],
    name = '',
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handlePointerOver = () => {
        setIsHovered(true);
    };

    const handlePointerOut = () => {
        setIsHovered(false);
    };

    return (
        <mesh
            geometry={geometry}
            material={material}
            position={position}
            rotation={rotation}
            scale={scale}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onClick={onClick}
            name={name}
        >
            {isHovered && <Edges color="orange" linewidth={3} scale={1.1} />}
        </mesh>
    );
};

const Room = ({ bgColor, setBgColor }) => {
    const dispatch = useDispatch();
    const { nodes, materials } = useGLTF('/assets/room.glb');

    const [title, setTitle] = useState('Felix');
    const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3());

    const [open, setOpen] = useState(false);
    const { camera } = useThree();

    const cameraPosition = useSelector((state) => state.camera.position);
    const cameraSet = useSelector((state) => state.camera.cameraSet);
    const targetVector = new THREE.Vector3(
        cameraPosition.x,
        cameraPosition.y,
        cameraPosition.z,
    );

    const target = useSelector((state) => state.camera.target);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleBgColor = () => {
        setBgColor(!bgColor);
    };

    const handleMonitor = () => {
        dispatch(setCamera('monitor'));
    };

    const handlePhone = () => {
        dispatch(setCamera('contact'));
    };

    const handleBooks = (e) => {
        setTitle(e.object.name);
        if (target === 'book') {
            handleClickOpen();
        }
        dispatch(setCamera('book'));
    };

    const handleContact = (e, name) => {
        const url = CONTACT_URL[name];
        window.open(url, '_blank', 'noreferrer');
    };
    useFrame(() => {
        camera.lookAt(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    });

    useEffect(() => {
        camera.position.set(cameraSet[0], cameraSet[1], cameraSet[2]);
        camera.position.lerp(targetVector, 0.2);
    }, [target, cameraSet, targetVector]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (
                event.key === 'Escape' ||
                event.key === 'Esc' ||
                event.keyCode === 27
            ) {
                dispatch(setCamera('init'));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <group dispose={null}>
            <group position={[0.095, -0.373, 0.14]} scale={4.819}>
                <mesh
                    geometry={nodes.House_1.geometry}
                    material={materials.suelo}
                />
                <mesh
                    geometry={nodes.House_2.geometry}
                    material={materials.afuera}
                />
                <mesh
                    geometry={nodes.House_3.geometry}
                    material={materials.puerta}
                />
                <mesh
                    geometry={nodes.House_4.geometry}
                    material={materials.frame}
                />
            </group>
            <group
                position={[-3.531, 1.34, 0.08]}
                rotation={[Math.PI / 2, 0, -2.025]}
                scale={0.01}
            >
                <mesh
                    geometry={nodes.album_1.geometry}
                    material={materials['13___Default']}
                />
                <mesh
                    geometry={nodes.album_2.geometry}
                    material={materials['14___Default']}
                />
                <mesh
                    geometry={nodes.album_3.geometry}
                    material={materials['15___Default']}
                />
            </group>
            <mesh
                geometry={nodes.door_hand.geometry}
                material={materials.gray}
                position={[-4.157, 2.42, 4.442]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.111}
            />
            <group
                position={[0.261, 0.659, -2.511]}
                scale={[-0.296, -0.034, -0.034]}
            >
                <mesh
                    geometry={nodes.drawer_1.geometry}
                    material={materials.wood}
                />
                <mesh
                    geometry={nodes.drawer_2.geometry}
                    material={materials.gray}
                />
            </group>
            <group
                position={[0.245, 1.026, -3.312]}
                scale={[0.316, 0.045, 0.316]}
            >
                <HoverableMesh
                    geometry={nodes.lamp_1.geometry}
                    material={materials.lamp}
                    onClick={handleBgColor}
                />
                <mesh
                    geometry={nodes.lamp_2.geometry}
                    material={materials.frame}
                />
            </group>
            <mesh
                geometry={nodes.shelf.geometry}
                material={materials.wood}
                position={[-2.92, 4.041, -3.764]}
                scale={[1.205, 0.086, 0.455]}
            />
            <mesh
                geometry={nodes.paper2.geometry}
                material={nodes.paper2.material}
                position={[-3.66, 0.011, 1.339]}
                scale={0.577}
            />
            <mesh
                geometry={nodes.paper.geometry}
                material={nodes.paper.material}
                position={[-3.492, 0.078, 1.435]}
                rotation={[0, 0, -0.878]}
                scale={0.577}
            />
            <mesh
                geometry={nodes.can.geometry}
                material={materials.frame}
                position={[-3.58, 0.515, 1.407]}
                scale={0.394}
            />
            <mesh
                geometry={nodes.pad.geometry}
                material={materials.frame}
                position={[-2.845, 1.371, -1.386]}
                scale={1.205}
            />
            <mesh
                geometry={nodes.desk.geometry}
                material={materials.wood}
                position={[-2.943, 1.349, -2.506]}
                scale={[1.205, 0.12, 1.205]}
            />
            <group position={[-3.958, 1.431, -3.489]} scale={0.077}>
                <mesh
                    geometry={nodes.computerbody_1.geometry}
                    material={materials.frame}
                />
                <mesh
                    geometry={nodes.computerbody_2.geometry}
                    material={materials.pcinsidenormal}
                />
            </group>
            <group position={[-3.781, 2.47, -1.472]} scale={1.456}>
                <HoverableMesh
                    geometry={nodes.monitor_1.geometry}
                    material={materials.frame}
                    onClick={handleMonitor}
                />
                <mesh
                    geometry={nodes.monitor_2.geometry}
                    material={materials.screen}
                />
            </group>
            <group
                position={[-2.793, 1.422, -2.237]}
                scale={[0.137, 0.04, 0.083]}
            >
                <mesh
                    geometry={nodes.mouse_1.geometry}
                    material={materials.frame}
                />
                <mesh
                    geometry={nodes.mouse_2.geometry}
                    material={materials.light}
                />
            </group>
            <mesh
                geometry={nodes.chair.geometry}
                material={materials.silla2}
                position={[-2.496, -0.292, -2.24]}
                rotation={[-0.498, -1.215, 1.1]}
                scale={0.07}
            />
            <group
                position={[-2.859, 1.4, -1.158]}
                scale={[0.266, 0.019, 0.797]}
            >
                <mesh
                    geometry={nodes.keyboard_1.geometry}
                    material={materials.frame}
                />
                <mesh
                    geometry={nodes.keyboard_2.geometry}
                    material={materials.rgb}
                />
            </group>
            <group>
                <group
                    position={[-3.96, 4.595, -3.829]}
                    rotation={[2.325, -1.082, -0.754]}
                    scale={[0.2, 0.2, 0.118]}
                >
                    <HoverableMesh
                        geometry={nodes.felix_book_1.geometry}
                        material={materials.Images}
                        onClick={handleBooks}
                        name="Felix"
                    />
                    <mesh
                        geometry={nodes.felix_book_2.geometry}
                        material={materials.Book_cover}
                    />
                    <mesh
                        geometry={nodes.felix_book_3.geometry}
                        material={materials.Sheets}
                    />
                </group>
                <group
                    position={[-2.132, 4.541, -4.021]}
                    rotation={[2.793, 0, 0]}
                    scale={0.2}
                >
                    <HoverableMesh
                        geometry={nodes.fourtor_book_1.geometry}
                        material={materials['Images.001']}
                        onClick={handleBooks}
                        name="Fourtor"
                    />
                    <mesh
                        geometry={nodes.fourtor_book_2.geometry}
                        material={materials['Book_cover.001']}
                    />
                    <mesh
                        geometry={nodes.fourtor_book_3.geometry}
                        material={materials['Sheets.001']}
                    />
                </group>
                <group
                    position={[-2.859, 4.541, -3.894]}
                    rotation={[2.744, 0.489, 0.195]}
                    scale={0.2}
                >
                    <mesh
                        geometry={nodes.cook_book_1.geometry}
                        material={materials['Images.002']}
                    />
                    <HoverableMesh
                        geometry={nodes.cook_book_2.geometry}
                        material={materials['Book_cover.002']}
                        onClick={handleBooks}
                        name="Cooking"
                    />
                    <mesh
                        geometry={nodes.cook_book_3.geometry}
                        material={materials['Sheets.002']}
                    />
                </group>
                <Html>
                    <ProjectDetail
                        title={title}
                        open={open}
                        setOpen={setOpen}
                    />
                </Html>
            </group>
            <group position={[-1.049, -0.692, 1.149]} scale={1.419}>
                <mesh
                    geometry={nodes.bed_frame_1.geometry}
                    material={materials.wood}
                />
                <mesh
                    geometry={nodes.bed_frame_2.geometry}
                    material={materials.colchon}
                />
            </group>
            <mesh
                geometry={nodes.cushion.geometry}
                material={materials.sabanas}
                position={[3.11, 0.988, -3.333]}
                rotation={[0.604, 0, 0]}
                scale={[1.205, 1.596, 1.205]}
            />
            <mesh
                geometry={nodes.bedding.geometry}
                material={materials.sabanas}
                position={[3.211, 1.29, -0.072]}
                scale={[2.502, 1.205, 3.534]}
            />
            <group
                position={[2.992, 0.688, 0.052]}
                rotation={[Math.PI / 2, 0, Math.PI / 6]}
                scale={5}
            >
                <mesh
                    geometry={nodes.iPhone_6_1.geometry}
                    material={materials.Space_Gray}
                />
                <mesh
                    geometry={nodes.iPhone_6_2.geometry}
                    material={materials['Space_Gray_(Shiny_Parts)']}
                />
                <mesh
                    geometry={nodes.iPhone_6_3.geometry}
                    material={materials.Plastic_Black}
                />
                <mesh
                    geometry={nodes.iPhone_6_4.geometry}
                    material={materials.Display}
                />
                <mesh
                    geometry={nodes.iPhone_6_5.geometry}
                    material={materials['Display_Rim_Plastic_(Riough)']}
                />
                <mesh
                    geometry={nodes.iPhone_6_6.geometry}
                    material={materials.Thin_Film}
                />
                <mesh
                    geometry={nodes.iPhone_6_7.geometry}
                    material={materials.Lens}
                />
                {target === 'contact' ? (
                    <mesh
                        geometry={nodes.iPhone_6_8.geometry}
                        material={materials['Back_Mix_Material_(Apple_Logo)']}
                        onClick={handlePhone}
                    />
                ) : (
                    <HoverableMesh
                        geometry={nodes.iPhone_6_8.geometry}
                        material={materials['Back_Mix_Material_(Apple_Logo)']}
                        onClick={handlePhone}
                    />
                )}
                <mesh
                    geometry={nodes.iPhone_6_9.geometry}
                    material={materials.Gray_Plastic}
                />
                <mesh
                    geometry={nodes.iPhone_6_10.geometry}
                    material={materials.Glass}
                />
                <mesh
                    geometry={nodes.iPhone_6_11.geometry}
                    material={materials['Flash_Glass_(Bumped)']}
                />
                <mesh
                    geometry={nodes.iPhone_6_12.geometry}
                    material={materials['Diode_Yellow_/_Green']}
                />
                <mesh
                    geometry={nodes.iPhone_6_13.geometry}
                    material={materials.Diode_Orange}
                />
                <mesh
                    geometry={nodes.iPhone_6_14.geometry}
                    material={materials.Black}
                />
            </group>
            {target === 'contact' ? (
                <>
                    <HoverableMesh
                        geometry={nodes.Github.geometry}
                        material={materials.Github}
                        position={[2.988, 0.708, 0.059]}
                        rotation={[0, -Math.PI / 6, 0]}
                        scale={[0.16, 0.3, 0.07]}
                        onClick={(e) => handleContact(e, 'github')}
                    />
                    <HoverableMesh
                        geometry={nodes.email.geometry}
                        material={materials.email}
                        position={[2.891, 0.708, 0.235]}
                        rotation={[0, -Math.PI / 6, 0]}
                        scale={[0.16, 0.3, 0.07]}
                        onClick={(e) => handleContact(e, 'gmail')}
                    />
                    <HoverableMesh
                        geometry={nodes.LinkedIn.geometry}
                        material={materials.LinkedIn_logo}
                        position={[3.085, 0.708, -0.108]}
                        rotation={[0, -Math.PI / 6, 0]}
                        scale={[0.16, 0.3, 0.07]}
                        onClick={(e) => handleContact(e, 'linkedin')}
                    />
                </>
            ) : (
                <>
                    <mesh
                        geometry={nodes.Github.geometry}
                        material={materials.Github}
                        position={[2.988, 0.708, 0.059]}
                        rotation={[0, -Math.PI / 6, 0]}
                        scale={[0.16, 0.3, 0.07]}
                    />
                    <mesh
                        geometry={nodes.email.geometry}
                        material={materials.email}
                        position={[2.891, 0.708, 0.235]}
                        rotation={[0, -Math.PI / 6, 0]}
                        scale={[0.16, 0.3, 0.07]}
                    />
                    <mesh
                        geometry={nodes.LinkedIn.geometry}
                        material={materials.LinkedIn_logo}
                        position={[3.085, 0.708, -0.108]}
                        rotation={[0, -Math.PI / 6, 0]}
                        scale={[0.16, 0.3, 0.07]}
                    />
                </>
            )}
        </group>
    );
};

useGLTF.preload('/assets/room.glb');

export default Room;
