import React from 'react';
import { Box, MenuItem, InputLabel, Select, FormControl } from '@mui/material';

const SelectField = ({options, label, inputValue, handleChange}) => (
    <Box mt={3} width='100%' bg='gray' textAlign='left'>
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select value={inputValue[label]} label={label} onChange={e => handleChange(label, e.target.value)}>
                {options.map(({id, name})=> (
                    <MenuItem key={id} value={id}>{name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>
)

export default SelectField