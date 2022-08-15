import React, {useState} from 'react';
import {useNavigate } from 'react-router-dom'
import SelectField from '../components/SelectField';
import Loading from '../components/Loading';
import useAxios from '../hooks/useAxios'
import { useDispatch } from 'react-redux/es/exports';
import { Box } from '@mui/system';
import {Button, Typography} from '@mui/material';
import TextFiled from '../components/TextFiled';
import {handleChangeDifficaulty, handleChangeType, handleChangeAmount, handleChangeCategory} from '../redux/actions'

const Settings = () => {

    const {response, error, loading} = useAxios({url: '/api_category.php'});
    const [inputValue, setInputValue] = useState({});
    const dispatch = useDispatch();
    const navigation = useNavigate()

// conditional loading for loading and when we get error
    if(loading){
        return <Loading />
    }

    if(error){
        return(
            <Typography>
                Something went wrong!
            </Typography>
        )
    }

// store options items to send into children by props
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

// save seleceted items by user into state and dispatch reducer from redux
    const handleChange = (label, value) => {
        setInputValue(prev=> ({...prev, [label]: value}));
        switch(label){
            case 'Category':
                dispatch(handleChangeCategory(value));
                break;
            case 'Difficulty':
                dispatch(handleChangeDifficaulty(value));
                break;
            case 'Type':
                dispatch(handleChangeType(value));
                break;
            case 'Amount':
                dispatch(handleChangeAmount(value));
                break;
            default: return;
        }
    }

// hangle form request and send user with its choises to question page
    const handleSubmit = (e) => {
        e.preventDefault();
        navigation('/questions')
    }

// store children props to avoid repetition
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