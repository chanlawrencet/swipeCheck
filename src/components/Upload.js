import React from "react";
import Button from "@material-ui/core/Button";
import Papa from 'papaparse';

const howToStyled = {
    marginTop: '50px'
};
const fileUploadMessageStyle = {
    marginTop: '50px'
};

class Upload extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {selectedFile:null};
    }

    handleFileUpload = (event) =>{
        this.setState({selectedFile:event.target.files[0]})
    };

    importCSV = () => {
        const { selectedFile } = this.state;
        Papa.parse(selectedFile, {
            complete: this.updateData,
            header: true
        });
    };

    updateData = (result) => {
        const data = result.data;
        const {updatePage, setData} = this.props;
        updatePage('settings');
        setData(data);
    };

    render() {
        const {selectedFile} = this.state;
        return (
            <div>
                <h2>Upload CSV:</h2>
                <Button
                    variant="outlined"
                    component="label"
                    color="primary">
                    choose file
                    <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={this.handleFileUpload}
                        accept='text/csv'
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
                                    <Button variant="outlined" color="primary" onClick={this.importCSV}>
                                        continue
                                    </Button>
                                )}
                            </div>
                        ):
                        (<div>No file uploaded.</div>)}
                </div>
                <div style={howToStyled}>
                    <a href='/howTo'>How do I find this file?</a>
                </div>
            </div>
        );
    }
}

export default Upload;