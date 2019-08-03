import React from 'react';
import './App.css';
import WelcomeMessage from './components/Welcome';
import Upload from './components/Upload';
import HowTo from './components/HowTo'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={WelcomeMessage} />
              <Route exact path='/upload' component={Upload} />
              <Route exact path='/howTo' component={HowTo} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
