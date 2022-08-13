import React, {useState} from 'react';
import SelectField from '../components/SelectField';
import useAxios from '../hooks/useAxios'
import { Box } from '@mui/system';
import {Button,CircularProgress, Typography} from '@mui/material';
import TextFiled from '../components/TextFiled';

const Settings = () => {

    const {response, error, loading} = useAxios({url: '/api_category.php'});
    const [inputValue, setInputValue] = useState({})

    if(loading){
        return (
            <Box mt={15}>
                <CircularProgress />
            </Box>
        )
    }

    if(error){
        return(
            <Typography>
                Something went wrong!
            </Typography>
        )
    }

    const options = {
        difficulty: [
            {id: 'easy', name: 'Easy'},
            {id: 'medium', name: 'Medium'},
            {id: 'hard', name: 'Hard'}
        ],
        type: [
            {id: 'multiple', name: 'Multiple choise'},
            {id: 'boolean', name: 'True/False'}
        ]
    }

    const handleChange = (type, value) => {
        setInputValue(prev=> ({...prev, [type]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const valueAndHandleValueProps = {inputValue: inputValue, handleChange: handleChange}

    return (
        <form onSubmit={handleSubmit}>
            <SelectField options={response.trivia_categories} label='Category' {...valueAndHandleValueProps} />
            <SelectField options={options.difficulty} label='Difficulty' {...valueAndHandleValueProps} />
            <SelectField options={options.type} label='Type' {...valueAndHandleValueProps} />
            <TextFiled label='Amount' {...valueAndHandleValueProps} />
            <Box mt={3}>
                <Button fullWidth variant='contained' type='submit'>Get Start</Button>
            </Box>
        </form>
    )
}

export default Settings