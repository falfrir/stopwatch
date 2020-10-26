import React from 'react';
import Timer from './components/Timer';
import Container from '@material-ui/core/Container' 

const App = () => {
  return (
    <Container className="app" component="main" maxWidth="xs">
      <Timer />
    </Container>
  );
}

export default App;
