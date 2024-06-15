import { createSlice } from '@reduxjs/toolkit';
import { Vector3 } from 'three';

const OBJECT_POSITION = {
    init: new Vector3(9.5, 9.5, 9.5),
    monitor: new Vector3(-1, 2, -1),
    book: new Vector3(-3, 4.5, -5),
    contact: new Vector3(2.8, -0.2, 0),
};

const CAMERA_POSITION = {
    init: [12.3, 12.3, 12.3],
    monitor: [-0.5, 2, -1],
    book: [-3, 4.5, -1],
    contact: [2.7, 3, 0],
};

const initialState = {
    position: {
        x: OBJECT_POSITION.init.x,
        y: OBJECT_POSITION.init.y,
        z: OBJECT_POSITION.init.z,
    },
    cameraSet: CAMERA_POSITION.init,
    target: 'init',
};

const cameraSlice = createSlice({
    name: 'camera',
    initialState,
    reducers: {
        setCamera(state, action) {
            const vector3Position = OBJECT_POSITION[action.payload];
            state.target = action.payload;

            state.position = {
                x: vector3Position.x,
                y: vector3Position.y,
                z: vector3Position.z,
            };
            state.cameraSet = CAMERA_POSITION[action.payload];
        },
    },
});

export const { setCamera } = cameraSlice.actions;

export default cameraSlice.reducer;
