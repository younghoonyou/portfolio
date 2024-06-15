import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const PROJECT_DETAIL = {
    Felix: {
        stack: [
            'https://img.shields.io/badge/C%2B%2B-00599C?logo=cplusplus&logoColor=fff&style=for-the-badge',
            'https://img.shields.io/badge/Qt-41CD52?logo=qt&logoColor=fff&style=for-the-badge',
            'https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?logo=microsoftsqlserver&logoColor=fff&style=for-the-badge',
            'line',
            'https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=for-the-badge',
            'https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=fff&style=for-the-badge',
            'line',
            'https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge',
            'https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=for-the-badge',
            'https://img.shields.io/badge/Flask-000?logo=flask&logoColor=fff&style=for-the-badge',
        ],
        position: 'Software Engineer',
        period: 'Dec 2022 - Jun 2024',
        contentText:
            'I was working as a software engineer I developed Transaction server using Qt C++. </br></br>\
             I can build the image using Docker and test on UCS using Kubernetes.</br></br>\
             With Bitbucket Pipeline implement CI/CD for our team. </br></br> \
             I also developed our internal tool using React and Flask , Nodejs',
        github: 'https://payfelix.com/',
    },
    Cooking: {
        stack: [
            'https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge',
            'https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge',
            'https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge',
            'line',
            'https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=for-the-badge',
            'https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=for-the-badge',
            'https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=fff&style=for-the-badge',
        ],
        position: 'Backend Developer',
        period: 'Sep 2022 - Dec 2022',
        contentText:
            "This project is about the food sns, user can share their own recipe and progress of cooking, The main page will show the best recommended and other categories. </br></br>\
            I was a back-end developer on our team, I collaborate with front-end developer to generate the API and also worked the documentation. </br></br>\
            <h2>Demo Video</h2></br>\
            <h3>Login</h3> \
            <video controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']} width=\"500px\"> \
            <source src=\"https://user-images.githubusercontent.com/55225394/208397693-8da8b50c-f13c-463b-a50f-71daef0c3af6.mp4\" type=\"video/mp4\" /> \
            </video></br> \
            <h3>User Profile</h3> \
            <video controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']} width=\"500px\"> \
            <source src=\"https://user-images.githubusercontent.com/55225394/208397972-d1ddc588-a371-478f-8bb4-97dcec731186.mp4\" type=\"video/mp4\" /> \
            </video></br> \
            <h3>Create a Recipe</h3> \
            <video controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']} width=\"500px\"> \
            <source src=\"https://user-images.githubusercontent.com/55225394/208398015-f5be0fb8-36d3-4b4c-abb1-ef651b7a7796.mp4\" type=\"video/mp4\" /> \
            </video></br> \
            <h3>Save & Post a Recipe</h3> \
            <video controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']} width=\"500px\"> \
            <source src=\"https://user-images.githubusercontent.com/55225394/208398054-1a538f1d-a878-43f3-b6ea-dafb58602df7.mp4\" type=\"video/mp4\" /> \
            </video></br> \
            <h3>Recipe Details</h3> \
            <video controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']} width=\"500px\"> \
            <source src=\"https://user-images.githubusercontent.com/55225394/208398081-4bbaac61-40d1-4073-8628-86e2993db7eb.mp4\" type=\"video/mp4\" /> \
            </video></br> \
            ",
        github: 'https://github.com/younghoonyou/cook-king',
    },
    Fourtor: {
        stack: [
            'https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=fff&style=for-the-badge',
            'https://img.shields.io/badge/STMicroelectronics-03234B?logo=stmicroelectronics&logoColor=fff&style=for-the-badge',
            'https://img.shields.io/badge/Arduino-00878F?logo=arduino&logoColor=fff&style=for-the-badge',
            'line',
            'https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge',
            'https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=fff&style=for-the-badge',
            'https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=for-the-badge',
            'line',
            'https://img.shields.io/badge/Amazon%20EC2-F90?logo=amazonec2&logoColor=fff&style=for-the-badge',
            'https://img.shields.io/badge/NGINX-009639?logo=nginx&logoColor=fff&style=for-the-badge',
        ],
        position: 'ECU Team leader',
        period: 'Jun 2021 - Dec 2021',
        contentText:
            "This project is about making a Electrical Vehicle. </br> Our goal was gathering car information like motor torque, battery temperature, battery cell voltage.\
            Additionally I suggest to make a website to view our data in live using Telemetry and React.</br></br>\
            <img src='https://user-images.githubusercontent.com/69233428/157842585-637dd3f1-1ec5-4d68-9f97-1a471d2b6c80.png' width=\"500px\"></br>\
             I was the leader of ECU which contains whole car's information.</br> I managed our team member and allocated work to do, we did C programming on Arduino and STM-32 Board, also web programming.</br>\
             </br> \
             <img src='https://user-images.githubusercontent.com/69233428/157981228-7a8dd43e-2b86-45e9-9617-a57b37183c0c.gif' width=\"500px\"/>",
        github: 'https://github.com/younghoonyou/fourtor_ECU',
    },
};

const ProjectDetail = ({ open, setOpen, title }) => {
    const handleGithubRepo = () => {
        const url = PROJECT_DETAIL[title].github;
        window.open(url, '_blank', 'noreferrer');
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            sx={{
                '& .MuiPaper-root': { width: '100%' },
            }}
        >
            <DialogTitle>
                <h1>{title}</h1>
                <h4>👨‍💻{PROJECT_DETAIL[title].position}</h4>
                <h4>🗓️ {PROJECT_DETAIL[title].period}</h4>
                <div align="center">
                    <h3>🛠Tech Stack🛠</h3>
                    {PROJECT_DETAIL[title].stack.map((imgs) => {
                        return imgs === 'line' ? (
                            <br />
                        ) : (
                            <img src={imgs} style={{ marginRight: '10px' }} />
                        );
                    })}
                </div>
            </DialogTitle>
            <DialogContent style={{ height: '600px' }}>
                <DialogContentText
                    style={{
                        width: '100%',
                        overflowY: 'auto',
                        fontWeight: 'bold',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        dangerouslySetInnerHTML={{
                            __html: PROJECT_DETAIL[title].contentText,
                        }}
                    />
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleGithubRepo}>
                    <img
                        width={title === 'Felix' ? 80 : 40}
                        src={
                            title === 'Felix'
                                ? '/images/Felix.png'
                                : '/images/github.256x251.png'
                        }
                        alt="Images"
                    />
                </Button>
                <Button variant="contained" onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProjectDetail;
