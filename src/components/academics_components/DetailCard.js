import React from 'react';
import { Card, Box, CardContent, Typography, CardMedia } from '@mui/material';
import img from "../../res/school.png";

function DetailCard(props) {
    const eduDetail = props.detail;

    return (<Box width="200px"> 
        <Card style={{ backgroundColor: "#EB455F"}} className="p-2">
            <CardMedia component='img' height='150px' image={img} alt="school" />
            <CardContent>
                <Typography color='white' gutterBottom variant='h5' component='div' sx={{ fontWeight: 'bold', fontSize: 22}}>
                    {eduDetail.title}
                </Typography>
                <Typography variant='body2' color="whitesmoke">
                    {eduDetail.body}
                </Typography>
            </CardContent>
        </Card>
    </Box>);
}

export default DetailCard;