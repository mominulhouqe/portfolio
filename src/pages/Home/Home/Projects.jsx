import React from 'react';
import { Slide } from 'react-awesome-reveal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const items = [
        {
            name: 'Language Lerning',
            image: 'https://i.ibb.co/7j2vvHr/download-1.png',
            live: 'https://language-club-a06e8.web.app/',
            source: 'https://github.com/mominulhouqe/Learning-Language'
        },
        {
            name: 'News Paper',
            image: 'https://i.ibb.co/HrTsq20/download-2.png',
            live: 'https://newspaper-d6a09.web.app/category/0',
            source: 'https://github.com/mominulhouqe/dragon-newspaper'
        },
        {
            name: 'Quiz Hero',
            image: 'https://i.ibb.co/nBVm3V9/download-4.png',
            live: 'https://lovely-tiramisu-27d49c.netlify.app/',
            source: 'https://github.com/mominulhouqe/Quiz-App'
        },
        {
            name: 'The Cheif',
            image: 'https://i.ibb.co/vxSmN3j/download.png',
            live: 'https://chif-master.web.app/',
            source: 'https://github.com/mominulhouqe/cheif-master'
        },
        {
            name: 'Job Frags',
            image: 'https://i.ibb.co/xgL7sWc/download-3.png',
            live: 'https://willowy-tartufo-23b198.netlify.app/',
            source: 'https://github.com/mominulhouqe/Job-Hunting'
        },
        {
            name: 'The Bike',
            image: 'https://i.ibb.co/M60SJWL/download-5.png',
            live: 'https://mominulhouqe.github.io/Biker-Zone/',
            source: 'https://github.com/mominulhouqe/Biker-Zone'
        },
    ];

    return (
        <div className='bg-[#FDF8F7]'>
            <div className='text-center my-12'>
                <h1 className='font-semibold text-yellow-500 text-2xl'>Portfolio</h1>
                <h1 className='font-bold mb-5 text-4xl'>My Amazing Work</h1>
                <hr />
            </div>
            <div className='flex flex-wrap gap-5 items-center justify-center container mx-auto'>
                {items.map((item) => (
                    <Slide key={item.name} direction="up">
                        <Card className='shadow-2xl' sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt={item.name}
                                height="140"
                                image={item.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link target='_blank' to={item.live}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        startIcon={<FaExternalLinkAlt />}
                                        sx={{
                                            backgroundColor: '#3f51b5',
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#2c3e99',
                                            },
                                        }}
                                    >
                                        Live Site
                                    </Button>
                                </Link>
                                <Link target='_blank' to={item.source}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        startIcon={<FaGithub />}
                                        sx={{
                                            backgroundColor: '#f44336',
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#d32f2f',
                                            },
                                        }}
                                    >
                                        Source Code
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Slide>
                ))}
            </div>
        </div>
    );
};

export default Projects;


/* 
https://i.ibb.co/7j2vvHr/download-1.png
https://i.ibb.co/HrTsq20/download-2.png
https://i.ibb.co/xgL7sWc/download-3.png
https://i.ibb.co/nBVm3V9/download-4.png
https://i.ibb.co/M60SJWL/download-5.png
https://i.ibb.co/vxSmN3j/download.png
*/