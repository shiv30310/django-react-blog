
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea} from '@mui/material';

export default function PostCard({content, mainCard}) {

    const handleClick = (event) => {
        event.preventDefault()
    }

    return (
        <Card sx={{margin: 3}} onClick={openCard}>
            <CardActionArea  sx={mainCard ? { 
            height:200} : { height: 150}}>
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='text' onClick={handleClick}>Share</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
