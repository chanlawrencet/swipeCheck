import React from 'react';


const divStyle = {
    marginTop: '20vh',
    textAlign: 'center'
};

const jumboStyle = {
    fontSize: '75px',
};

class WelcomePage extends React.Component{
    render(){
        return (
            <div style={divStyle}>
                <h1>Welcome to Swipe Check!</h1>
                <h2>The way to check your meal swipe usage for your favorite elephant-loving university </h2>
                <div style={jumboStyle}>🐘🐘🐘</div>
            </div>
        )
    }

}

export default WelcomePage;