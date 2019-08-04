import React from 'react';
import './App.css';
import HowTo from './components/HowTo'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "./components/Main";
import disableBrowserBackButton from "disable-browser-back-navigation";


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
            </BrowserRouter>

        );
    }
}
export default App;
