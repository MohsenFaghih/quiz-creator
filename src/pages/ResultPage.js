import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { handleChangeAmount, handleChangeScore } from '../redux/actions';

const ResultPage = () => {
  const {score} = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleResetState(){
    dispatch(handleChangeScore(0))
    dispatch(handleChangeAmount(5))
    navigate('/')
  }

  return (
    <Box mt={20}>
      <Typography variant='h3' fontWeight='bold' mb={3}>Final Score {+score}</Typography>
      <Button pt={4} mt={30} onClick={handleResetState} variant='outlined'>Back to Home</Button>
    </Box>
  )
}

export default ResultPage