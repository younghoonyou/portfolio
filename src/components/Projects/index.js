import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Route53 from '../../assets/Arch_Amazon-Route-53_32.png';
import VPCLattice from '../../assets/Arch_Amazon-VPC-Lattice_32.png';
import DX from '../../assets/Arch_AWS-Direct-Connect_32.png';
import TGW from '../../assets/Arch_AWS-Transit-Gateway_32.png';
import ELB from '../../assets/Arch_Elastic-Load-Balancing_32.png';
import VPC from '../../assets/Virtual-private-cloud-VPC_32.png';
import VPN from '../../assets/Arch_AWS-Site-to-Site-VPN_32.png';
import awsArch from '../../assets/aws_arch.png';

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
    AWS: {
        stack: [
            'https://custom-icon-badges.demolab.com/badge/AWS-%23FF9900.svg?logo=aws&logoColor=white',
            'line',
            Route53,
            VPN,
            VPC,
            VPCLattice,
            TGW,
            DX,
            ELB,
        ],
        position: 'Cloud Support Engineer',
        period: 'Dec 2024 - Current',
        contentText: `<ul><li>Analyze and support customer network issues in AWS services VPC, ELB, Route53, DX, TGW, VPN</li>\
            <li>Provided technical support and guidance to optimize cloud network performance and ensure service reliability</li> \
            <li>Collaborated with internal engineering teams to escalate complex issues and improve platform resiliency</li> \
            </ul></br>\
            <img src="${awsArch}" width="500px">`,
        github: 'https://aws.amazon.com/',
    },
};

const Images = {
    Felix: require('../../images/Felix.png'),
    Github: require('../../images/github.256x251.png'),
    AWS: require('../../images/AWS.png'),
};

const ProjectDetail = ({ open, setOpen, title }) => {
    const handleGithubRepo = () => {
        const url = PROJECT_DETAIL[title].github;
        window.open(url, '_blank', 'noreferrer');
    };
    const handleClose = () => {
        setOpen(false);
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

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullScreen={isMobile}
            sx={{
                '& .MuiPaper-root': {
                    width: '100%',
                    maxWidth: isMobile ? '100%' : '900px',
                    margin: isMobile ? '0' : 'auto',
                    height: isMobile ? '100%' : 'auto',
                },
            }}
        >
            <DialogTitle
                sx={{
                    padding: isMobile ? '20px 16px' : '24px',
                    textAlign: isMobile ? 'center' : 'left',
                }}
            >
                <h1
                    style={{
                        fontSize: isMobile ? '24px' : '32px',
                        margin: '0 0 10px 0',
                    }}
                >
                    {title}
                </h1>
                <h4 style={{ margin: '5px 0' }}>
                    👨‍💻{PROJECT_DETAIL[title].position}
                </h4>
                <h4 style={{ margin: '5px 0' }}>
                    🗓️ {PROJECT_DETAIL[title].period}
                </h4>
                <div align="center" style={{ marginTop: '20px' }}>
                    <h3 style={{ fontSize: isMobile ? '18px' : '20px' }}>
                        🛠Tech Stack🛠
                    </h3>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '10px',
                        }}
                    >
                        {PROJECT_DETAIL[title].stack.map((imgs, index) => {
                            return imgs === 'line' ? (
                                <div
                                    key={`${index}-${title}`}
                                    style={{
                                        flexBasis: '100%',
                                        height: '10px',
                                    }}
                                />
                            ) : (
                                <div>
                                    <img
                                        key={`${index}-${imgs}-${title}`}
                                        src={imgs}
                                        style={{
                                            height: isMobile ? '28px' : '30px',
                                            maxWidth: '100%',
                                        }}
                                        alt="Tech stack"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </DialogTitle>
            <DialogContent
                sx={{
                    height: isMobile ? 'calc(100vh - 300px)' : '600px',
                    padding: isMobile ? '16px' : '24px',
                }}
            >
                <DialogContentText
                    sx={{
                        width: '100%',
                        overflowY: 'auto',
                        fontWeight: 'bold',
                        fontSize: isMobile ? '16px' : '14px',
                        lineHeight: isMobile ? '1.6' : '1.5',
                        '& video': {
                            maxWidth: '100%',
                            height: 'auto',
                            width: isMobile ? '100%' : '500px',
                        },
                        '& img': {
                            maxWidth: '100%',
                            height: 'auto',
                            width: isMobile ? '100%' : '500px',
                        },
                        '& h2, & h3': {
                            fontSize: isMobile ? '20px' : '24px',
                        },
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

            <DialogActions sx={{ padding: isMobile ? '16px' : '24px' }}>
                <Button onClick={handleGithubRepo} sx={{ marginRight: 'auto' }}>
                    <img
                        width={
                            title === 'Felix'
                                ? isMobile
                                    ? 60
                                    : 80
                                : isMobile
                                  ? 36
                                  : 40
                        }
                        src={Images[title]}
                        alt={`For ${title}`}
                    />
                </Button>
                <Button
                    variant="contained"
                    onClick={handleClose}
                    sx={{
                        fontSize: isMobile ? '16px' : '14px',
                        padding: isMobile ? '10px 20px' : '6px 16px',
                    }}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProjectDetail;
