import React from 'react';

import useTimer from '../hooks/Time';
import { formatTime } from '../tools';
import {
    Paper,
    Typography,
    Button,
    ButtonGroup
} from '@material-ui/core';

const Timer = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)

  return (
    <Paper style={{ margin: 20 }} elevation={4}>
        <Typography component="h1" variant="h5" align='center'>
          Stopwatch
        </Typography>
      <div>
          <Typography component="h2" variant="h5" align='center'>
          {formatTime(timer)}
          </Typography>
        <ButtonGroup fullWidth={true}>
          {
            !isActive && !isPaused ?
              <Button variant="contained" color="primary" onClick={handleStart}>Start</Button>
              : (
                isPaused ? <Button variant="contained" color="primary" onClick={handlePause}>Pause</Button> :
                  <Button variant="contained" color="primary" onClick={handleResume}>Resume</Button>
              )
          }
          <Button variant="contained" color="secondary" onClick={handleReset} disabled={!isActive}>Reset</Button>
        </ButtonGroup>
      </div>
    </Paper>
  );
}

export default Timer;
