import React from 'react';
import { useSelector } from 'react-redux';
import {Box, Typography, Button} from '@mui/material'

const Questions = (state) => {

  console.log(state)

  const {questionCategory,questionDifficaulty,questionType,amountOfQuestion} = useSelector((state) => state)
  console.log(questionCategory,questionDifficaulty,questionType,amountOfQuestion)

  return (
    <Box>
      <Typography variant='h4' >Question No</Typography>
      <Typography mt={5} >Question</Typography>
      <Box mt={2}>
        <Button variant='contained'>Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant='contained'>Answer 2</Button>
      </Box>
      <Box mt={5}>Score</Box>
    </Box>
  )
}

export default Questions