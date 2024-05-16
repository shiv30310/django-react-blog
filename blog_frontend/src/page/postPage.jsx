
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';

const FullPostPage = () => {
    const { id, title, description, image, author, category, created_at} = useLoaderData()

    return (
    <Card>
        <CardHeader
        title={title}
        subheader={`Category: ${category} | Author: ${author}`}
        />
        {image && (
        <CardMedia
            component="img"
            src={image}
            alt={title}
            height="300"
        />
        )}
        <CardContent>
        <Typography variant="body1" gutterBottom>
            {description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
            Created At: {created_at} | Updated At: {created_at}
        </Typography>
        <Typography variant="body2" component="div" style={{ whiteSpace: 'pre-line' }}>
            {description}
        </Typography>
        </CardContent>
    </Card>
    );
};

export default FullPostPage;

