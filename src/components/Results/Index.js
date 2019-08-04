import React from "react";
import Button from "@material-ui/core/Button";
import { CircularProgress } from '@material-ui/core';
import {ResponsivePie} from '@nivo/pie';
import {ResponsiveCalendar} from "@nivo/calendar";
import ResultsPlot from "./ResultsPlot";
const calendarStyle = {
    marginTop: '20px',
    height:'150px'
};

const bottomButton = {
    marginLeft: '30px'
};

const pieStyle = {
    height:'500px',
};

class Results extends React.Component{

    render() {
        const {updatePage, response} = this.props;
        if (!response){
            return (
                <div>
                    <CircularProgress/>
                    <h3>Loading...</h3>
                </div>
                )
        }
        console.log(response)

        const calendarData = this.props.response.stats.calendar;
        const plotData = this.props.response.plot;
        return(
            <div>
                <h1>Your Results:</h1>
                <ResultsPlot data={plotData}/>
                <div style={calendarStyle}>
                    <ResponsiveCalendar
                        data={calendarData.data}
                        from={calendarData.from}
                        to={calendarData.to}
                        width={600}
                        height={150}/>
                </div>

                <div style={pieStyle}>
                    <ResponsivePie margin={{
                        left: 100,
                        right: 100,
                        top: 100,
                        bottom: 100
                    }}
                         data={this.props.response.stats.perLocation} width={500} height={500}/>
                    <br/>
                </div>
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