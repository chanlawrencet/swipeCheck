import React from "react";
import Upload from "./Upload";
import Settings from "./Settings";
import WelcomeMessage from "./Welcome";
import Results from "./Results";
import disableBrowserBackButton from 'disable-browser-back-navigation';

const divStyle = {
    textAlign : 'center',
    marginTop: '20vh',
};

class Main extends React.Component{


    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            page:'welcome',
            data: null,
            response: null
        };
    }


    switcher = (pageTitle) => {
        switch (pageTitle) {
            case 'welcome':
                return (
                    <div>
                        <WelcomeMessage/>
                        <Upload updatePage={this.updatePage} setData={this.setData}/>
                    </div>
                );
            case 'settings':
                return (<Settings data={this.state.data} updateResponse={this.updateResponse} updatePage={this.updatePage}/>);
            case 'results':
                return (<Results updatePage={this.updatePage} response={this.state.response}/>);
            default:
                return null;

        }
    };

    updatePage = pageTitle => this.setState({page: pageTitle});

    updateResponse = response => this.setState({response: response});

    setData = data => this.setState({data: data});

    render() {
        const {page, data} = this.state;
        return(
            <div style={divStyle}>
                {this.switcher(page)}
            </div>
        )
    }
}

export default Main;