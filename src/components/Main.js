import React from "react";
import Upload from "./Upload";
import Settings from "./Settings";
import WelcomeMessage from "./Welcome";
import Results from "./Results";

const divStyle = {
    textAlign : 'center',
    marginTop: '20vh',
};

const footer = {
    position: 'fixed',
    left: '0',
    bottom: '10px',
    width: '100%',
    textAlign: 'center',
};

class Main extends React.Component{


    constructor(props) {
        super(props);
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
                        <div style={footer}>Made with 🐘 by Lawrence</div>
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
        const {page} = this.state;
        return(
            <div style={divStyle}>
                {this.switcher(page)}
            </div>
        )
    }
}

export default Main;