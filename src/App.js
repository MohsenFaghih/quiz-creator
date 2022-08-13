import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Questions from './pages/Questions';
import ResultPage from './pages/ResultPage';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='sm'>
        <Box textAlign='center' mt={5}>
          <Routes>
            <Route path='/' exact element={
              <>
                <Typography variant='h2'>Quiz App</Typography>
                <Settings />
              </>}
            />
            <Route path='/questions' element={<Questions />} />
            <Route path='score' element={<ResultPage />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
