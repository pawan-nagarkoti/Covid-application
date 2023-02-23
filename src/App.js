import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Box } from '@mui/system';

// component
import { Main } from './component/Main';
import { Home } from './component/home/Home';
import { India } from './component/india/India';
import { World } from './component/world/World';
import { Contact } from './component/Contact/Contact ';

function App() {
  return (
    <>
      <Main />
      <Box sx={{ marginTop: 8 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/india" component={India} />
          <Route exact path="/world" component={World} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Box>
    </>
  );
}

export default App;
