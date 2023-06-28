import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Projects = () => {
    const items = [
        {
            name: 'Toys World',
            image: 'https://i.ibb.co/7j2vvHr/download-1.png'
        },
        {
            name: 'News Paper',
            image: 'https://i.ibb.co/HrTsq20/download-2.png'
        },
        {
            name: 'Quiz Hero',
            image: 'https://i.ibb.co/nBVm3V9/download-4.png'
        },
        {
            name: 'The Cheif',
            image: 'https://i.ibb.co/vxSmN3j/download.png'
        },
        {
            name: 'Job Frags',
            image: 'https://i.ibb.co/xgL7sWc/download-3.png'
        },
        {
            name: 'The Bike',
            image: 'https://i.ibb.co/M60SJWL/download-5.png'
        },
    ];

    return (
        <div>
            <div className='flex flex-wrap  gap-5 items-center justify-center container mx-auto'>
                {items.map((item) => (
                    <Card key={item.name} className='w-96' sx={{ maxWidth: 345 }}>
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
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
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