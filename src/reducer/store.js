import { configureStore } from '@reduxjs/toolkit';
import cameraReducer from './cameraReducer';

export const store = configureStore({
    reducer: {
        camera: cameraReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
