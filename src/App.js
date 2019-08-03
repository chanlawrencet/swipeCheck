import React from 'react';
import './App.css';
import WelcomeMessage from './components/Welcome';
import Upload from './components/Upload';
import HowTo from './components/HowTo'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Configure from "./components/Configure";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={WelcomeMessage} />
              <Route exact path='/upload' component={Upload} />
              <Route exact path='/howTo' component={HowTo} />
              <Route exact path='/configure' component={Configure} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
