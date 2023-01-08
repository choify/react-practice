import Box from '@mui/material/Box';
import MaterialCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Card = () => {
    return (
        <MaterialCard sx={{display: 'flex'}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent>
                    <Typography component="div" variant="h5">
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mac Miller
                    </Typography>
                </CardContent>
            </Box>
        </MaterialCard>
    )
}

export default Card;