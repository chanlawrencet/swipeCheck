import React from "react";
import Button from "@material-ui/core/Button";


const bottomButton = {
    marginLeft: '30px'
};

class Results extends React.Component{

    render() {
        const {updatePage} = this.props;
        return(
            <div>
                <Button variant="outlined" color="primary" onClick={() => updatePage('settings')}>
                    back
                </Button>
                <Button style={bottomButton} variant="outlined" color="primary" onClick={() => updatePage('welcome')}>
                    restart
                </Button>
            </div>
        )
    }
}

export default Results;