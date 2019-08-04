import React from "react";
import {LineChart, XAxis, YAxis, Tooltip, Line} from "recharts";
import './ResultsPlot.css'
import moment from "moment";

class ResultsPlot extends React.Component{

    TimeSeriesChart = (chartData, toolTipMap ) => {
        return(
            <LineChart
                width={800}
                height={300}
                data={chartData}>
                <XAxis
                    dataKey = 'key'
                    domain = {[1735932800000, 'auto']}
                    name = 'Time'
                    tickFormatter = {(unixTime) => moment(unixTime).format('MM/DD/YYYY')}
                    type = 'number'
                />
                <YAxis
                    dataKey = 'Ideal Usage'
                    name = 'Value'
                    domain={[0, 170]}
                />

                <Line type="monotone" dataKey="Your Usage" stroke='red' dot={{strokeWidth: 0.5}} />
                <Line type="monotone" dataKey="Ideal Usage" stroke='blue' dot={{strokeWidth: 0.5}} />
                <Tooltip
                    labelFormatter={(x) => {
                        console.log(toolTipMap[x]);
                        return toolTipMap[x]}}
                />
            </LineChart>
    );
    };

    render() {
        console.log(this.props);
        const oldData = this.props.data;
        let newData = [];
        let toolTipMap = {};
        oldData.forEach(({date, yourUsage, idealUsage}) => {
            const time = new Date(date).getTime();
            newData.push({'key': time, 'Your Usage': yourUsage, 'Ideal Usage': idealUsage});
            toolTipMap[time] = date;
        });

        console.log('newData', newData)
        return (
            <div>
                {this.TimeSeriesChart(newData, toolTipMap)}
            </div>
        )
    }
}

export default ResultsPlot;