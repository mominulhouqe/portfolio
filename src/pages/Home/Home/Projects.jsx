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
            name: 'Language Learning',
            image: 'https://i.ibb.co/7j2vvHr/download-1.png',
            live: 'https://language-club-a06e8.web.app/',
            source: 'https://github.com/mominulhouqe/Learning-Language',
            description:'This is Language Learning Website.Here You can Pursahse your Language course Which you can learning any language.This is have admin panel,insturctor panel,and also student panel.Populare Class section and also populare instructor class.There is i used HTML,CSS,TailwindCss,ReactJs,Nodejs,ExpressJs,Mongodb(CRUD operation)'
        },
        {
            name: 'News Paper',
            image: 'https://i.ibb.co/HrTsq20/download-2.png',
            live: 'https://newspaper-d6a09.web.app/category/0',
            source: 'https://github.com/mominulhouqe/dragon-newspaper',
            description:'This is news Paper Website.Here i used  apis.I used here HTML,CSS,Tailwindcss,Reactjs,Nodejs,ExpressJs.You can read updated news & also read Breaking News.'
        },
        {
            name: 'Quiz Hero',
            image: 'https://i.ibb.co/nBVm3V9/download-4.png',
            live: 'https://lovely-tiramisu-27d49c.netlify.app/',
            source: 'https://github.com/mominulhouqe/Quiz-App',
            description:'Quiz Hero Website you can test your Knowledge JavaScrtipt language. I used here HTML, CSS,javaScript Language'
        },
        {
            name: 'The Cheif',
            image: 'https://i.ibb.co/vxSmN3j/download.png',
            live: 'https://chif-master.web.app/',
            source: 'https://github.com/mominulhouqe/cheif-master',
            description:'This website you can find your best cheif in this website. I used here Technology HTML,CSS,Tailwidcss,ReactJs,Nodejs,ExpressJs,Mongodb(CRUD Operation).'
        },
        {
            name: 'Job Frags',
            image: 'https://i.ibb.co/xgL7sWc/download-3.png',
            live: 'https://willowy-tartufo-23b198.netlify.app/',
            source: 'https://github.com/mominulhouqe/Job-Hunting',
            description:'The Job Frags Website is here you can apply many other jobs.You can see your grap this website. What you apply this website you can also see that.I used here technology HTML,CSS,JavaScript,ReactJs'
        },
        {
            name: 'The Bike',
            image: 'https://i.ibb.co/M60SJWL/download-5.png',
            live: 'https://mominulhouqe.github.io/Biker-Zone/',
            source: 'https://github.com/mominulhouqe/Biker-Zone',
            description:'The Bike Website where you can buy your best bike.The bike website i used Technology HTML,CSS,tailwidcss,Reactjs,Website is fully responsive.I used Also here RESETAPIs'
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
                    <Slide key={item.name} direction="left">
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
                                  {item.description}
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