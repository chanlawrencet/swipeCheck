import React from "react";
import Button from "@material-ui/core/Button";

const divStyle = {
    textAlign : 'center',
    marginTop: '20vh',
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
                <h1>Let's get started</h1>
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
                <br/>
                <br/>
                <br/>
                {selectedFile ? (
                    <div>
                        <div>Selected File: {selectedFile.name}</div>
                        <br/>
                        <br/>
                        {selectedFile.type !== 'text/csv' ? (
                            <div>Oops! You have to upload a .csv file!</div>
                        ):(
                            <Button variant="outlined" color="primary" href={'/upload'}>
                                upload
                            </Button>
                        )}
                    </div>
                    ):
                    (<div>No file uploaded.</div>)}
                <br/>
                <br/>
                <br/>
                <div>
                    <a href='/howTo'>How do I find this file?</a>
                </div>
            </div>
        );
    }
}

export default Upload;