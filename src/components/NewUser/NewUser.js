import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';

const NewUser = () => {
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
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <p><b>Username</b></p>
                <Input
                    placeholder="Input Username"
                    required
                    sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
                />
                <p><b>Age(year)</b></p>
                <Input
                    placeholder="Input Age(year)"
                    required
                    sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    );
}

export default NewUser;