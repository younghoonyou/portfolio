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
        label: 'Work & Project',
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
    const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);

        React.useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleWindowResize);
            return () =>
                window.removeEventListener('resize', handleWindowResize);
        }, []);

        return { width };
    };
    const { width } = useViewport();
    const isMobile = width <= 768;
    const target = useSelector((state) => state.camera.target);
    const handleStep = (index) => {
        switch (index) {
            case 0:
                dispatch(setCamera({ type: 'init' }));
                break;
            case 1:
                dispatch(setCamera({ type: 'monitor' }));
                break;
            case 2:
                dispatch(setCamera({ type: 'book' }));
                break;
            case 3:
                dispatch(setCamera({ type: 'contact' }));
                break;
            default:
                dispatch(setCamera({ type: 'init' }));
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
                        color: bgColor ? '#3f72af' : '#3f72af',
                    },
                    '& .Mui-active circle': {
                        color: bgColor ? '#ff9e7d' : '#ff9e7d',
                    },
                    '& .MuiStepConnector-line': {
                        height: '90%',
                        borderColor: bgColor ? '#3f72af' : '#3f72af',
                    },
                    '& .MuiStepLabel-label': {
                        color: bgColor
                            ? '#f9f7f7 !important'
                            : '#16213e !important',
                        fontFamily: 'Poppins, sans-serif !important',
                        fontSize: isMobile
                            ? '0.4rem !important'
                            : '1rem !important',
                    },
                    '& .MuiStep-root': {
                        borderRadius: '10px',
                        padding: '10px',
                        margin: '5px 0',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            cursor: 'pointer',
                            background: bgColor
                                ? 'rgba(15, 52, 96, 0.6)'
                                : 'rgba(219, 226, 239, 0.6)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
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
