import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom'
import { handleChangeScore } from '../redux/actions';
import Loading from '../components/Loading';
import { decode } from 'html-entities';
import {Box, Typography, Button} from '@mui/material'
import useAxios from '../hooks/useAxios';

const Questions = () => {

  const [questionIndex, setQuestionIndex] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {questionCategory,questionDifficaulty,questionType,amountOfQuestion,score} = useSelector(state => state)

  let apiUrl = `/api.php?amount=${amountOfQuestion}${questionCategory ? `&category=${questionCategory}` : ''}${questionDifficaulty ? `&difficulty=${questionDifficaulty}` : ''}${questionType ? `&type=${questionType}` : ''}`
  
  const {response, loading} = useAxios({url: apiUrl});

  if(loading){
    return <Loading />
  }

  function handleAnswerClick(answer){
    if(answer === response.results[questionIndex].correct_answer){
      dispatch(handleChangeScore(score + 1))
    }
    if(questionIndex + 1 < response.results.length) setQuestionIndex(questionIndex + 1)
    else navigate('/score')
  }

  if(response && questionIndex < response.results.length){
    const q = response.results[questionIndex]
    const question = q.question
    const answers = [
      ...q.incorrect_answers,
      q.correct_answer
    ].sort()

    return ( 
      <div>
          <Box>
            <Typography variant='h4' >Question {questionIndex +1}</Typography>
            <Typography mt={5} >{decode(question)}</Typography>
            {answers.map((answer, i) => (
              <Box key={i} mt={2}>
                <Button onClick={e => handleAnswerClick(e.target.textContent)} fullWidth variant='contained'>{decode(answer)}</Button>
              </Box>
            ))}
            <Box mt={5}>Score: {score+ ' / ' +response.results.length}</Box>
          </Box>
      </div>
    )
  }

  return ''
}

export default Questions