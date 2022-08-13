import React from 'react'
import { Box } from '@mui/system'
import {FormControl, TextField} from '@mui/material'

const TextFiled = ({label, inputValue, handleChange}) => (
    <Box mt={3} width="100%">
        <FormControl fullWidth>
            <TextField
                value={inputValue[label]}
                size='small'
                onChange={e=>handleChange(label, Number(e.target.value))}
                variant='outlined'
                label='Amount of questions'
                type='number'
            />
        </FormControl>
    </Box>
)

export default TextFiled