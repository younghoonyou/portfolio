import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useSelector, useDispatch } from 'react-redux';
import { setCamera } from '../../reducer/cameraReducer';

const steps = [
    {
        label: 'Init',
    },
    {
        label: 'About me',
    },
    {
        label: 'Projects',
    },
    {
        label: 'Contacts',
    },
];

const StepperContainer = ({ bgColor }) => {
    const dispatch = useDispatch();
    const targetBox = {
        init: 0,
        monitor: 1,
        book: 2,
        contact: 3,
    };
    const target = useSelector((state) => state.camera.target);
    const handleStep = (index) => {
        switch (index) {
            case 0:
                dispatch(setCamera('init'));
                break;
            case 2:
                dispatch(setCamera('book'));
                break;
            case 3:
                dispatch(setCamera('contact'));
                break;
            case 1:
                dispatch(setCamera('monitor'));
                break;
            case 2:
                dispatch(setCamera('book'));
                break;
            case 3:
                dispatch(setCamera('contact'));
                break;
            default:
                dispatch(setCamera('init'));
                break;
        }
    };
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '15%',
                right: 0,
                verticalAlign: 'middle',
                width: '20%',
                height: '75%',
            }}
        >
            <Stepper
                activeStep={targetBox[target]}
                nonLinear
                orientation="vertical"
                sx={{
                    height: '80%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    '& .MuiStepLabel-root circle': {
                        color: 'gray',
                    },
                    '& .Mui-active circle': {
                        color: '#1976D2',
                    },
                    '& .MuiStepConnector-line': {
                        height: '90%',
                    },
                    '& .MuiStepLabel-label': {
                        color: bgColor
                            ? 'white !important'
                            : 'black !important',
                    },
                    '& .MuiStep-root': {
                        borderRadius: '10px',
                        '&:hover': {
                            cursor: 'pointer',
                            border: '0.1rem solid white',
                        },
                    },
                }}
            >
                {steps.map((step, index) => (
                    <Step key={step.label} onClick={() => handleStep(index)}>
                        <StepLabel>{step.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default StepperContainer;
