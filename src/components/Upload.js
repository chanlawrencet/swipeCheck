import React from "react";
import Button from "@material-ui/core/Button";

const divStyle = {
    textAlign : 'center',
    marginTop: '20vh',
};

const backStyled = {
    marginTop: '70px'
};
const howToStyled = {
    marginTop: '50px'
};
const fileUploadMessageStyle = {
    marginTop: '50px'
};

class Upload extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {selectedFile:null};
    }
    //https://medium.com/ecmastack/uploading-files-with-react-js-and-node-js-e7e6b707f4ef
    handleFileUpload = (event) =>{
        this.setState({selectedFile:event.target.files[0]})
    };

    render() {
        console.log(this.state);
        const {selectedFile} = this.state;
        return (
            <div style={divStyle}>
                <h1>Let's get started!</h1>
                <br/>
                <Button
                    variant="outlined"
                    component="label"
                    color="primary">
                    choose file
                    <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={this.handleFileUpload}
                    />
                </Button>
                <div style={fileUploadMessageStyle}>
                    {selectedFile ? (
                            <div>
                                <div>Selected File: {selectedFile.name}</div>
                                <br/>
                                <br/>
                                {selectedFile.type !== 'text/csv' ? (
                                    <div>Oops! You have to upload a .csv file!</div>
                                ):(
                                    <Button variant="outlined" color="primary" href={'/configure'} onClick={()=>{console.log('clicked!');}}>
                                        upload
                                    </Button>
                                )}
                            </div>
                        ):
                        (<div>No file uploaded.</div>)}
                </div>
                <div style={howToStyled}>
                    <a href='/howTo'>How do I find this file?</a>
                </div>
                <div style={backStyled}>
                    <Button variant="outlined" color="primary" href={'/'}>
                        home
                    </Button>
                </div>
            </div>
        );
    }
}

export default Upload;