import React from 'react';
import { Box } from '@mui/system';
import {CircularProgress} from '@mui/material';

const Loading = () => {
    return (
        <Box mt={15}>
            <CircularProgress />
        </Box>
    )
}

export default Loading