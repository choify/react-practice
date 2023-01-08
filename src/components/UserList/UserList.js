import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '../UI/Card';

const UserList = () => {
    return (
        <Box
            sx={{
                py: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center',
                flexWrap: 'wrap',
                backgroundColor: '#f1f1f1',
            }}
        >
            <Card />
        </Box>
    );
}

export default UserList;