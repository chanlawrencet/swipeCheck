import React from 'react';
import './App.css';
import HowTo from './components/HowTo'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "./components/Main";
import disableBrowserBackButton from "disable-browser-back-navigation";

const footer = {
    position: 'fixed',
    left: '0',
    bottom: '10px',
    width: '100%',
    textAlign: 'center',
};

class App extends React.Component{

    componentDidMount() {
        disableBrowserBackButton();
    }

    render() {
        return (
            <BrowserRouter >
                <Switch>
                    <Route exact path='/howTo' component={HowTo} />
                    <Route exact path='/' component={Main} />
                </Switch>
                <div style={footer}>Made with 🐘 by Lawrence</div>
            </BrowserRouter>

        );
    }
}
export default App;
