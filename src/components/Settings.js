import React from 'react';
import Button from '@material-ui/core/Button';
import {Switch, Slider} from '@material-ui/core'
import {getAPIBase} from "./helpers";
import 'whatwg-fetch'

const nextButton = {
    marginTop: '20px'
};

const backButton = {
    marginTop: '30px',
};

const listStyle = {
    display: 'inline-block',
    textAlign: 'left'
};
const switchStyle = {
    marginTop: '5px',
    width:'100px'
};

const sliderStyle = {
    marginTop: '20px',
    width:'200px',
    display: 'inline-block'
};

const diningHallStyle = {
    marginBottom: '5px'
};

const errorMsg = {
    color: 'red'
};

class Settings extends React.Component{

    mealsPerDayMarks = [
        {
            value: 0,
            label: "0"
        },
        {
            value: 1,
            label: "1"
        },
        {
            value: 2,
            label: "2"
        },
        {
            value: 3,
            label: "3"
        },
        {
            value: 4,
            label: "4"
        },
        {
            value: 5,
            label: "5"
        }
    ];
    mealPlanMarks = [
        {
            value: 40,
            label: "40"
        },
        {
            value: 80,
            label: "80"
        },
        {
            value: 100,
            label: "100"
        },
        {
            value: 160,
            label: "160"
        },
        {
            value: 200,
            label: "unlimited"
        }
    ];

    noneSelected = () => {
        const {mon, tue, wed, thu, fri, sat, sun} = this.state;
        return (!mon && !tue && !wed && !thu && !fri && !sat && !sun);
    };

    constructor(props) {
        super(props);
        this.state = {
            mon: true,
            tue: true,
            wed: true,
            thu: true,
            fri: true,
            sat: true,
            sun: true,
            mealPlan : 40,
            mealsPerDay : 3,
        };
    }

    makeAPICall = () => {
        this.props.updatePage('results')
        fetch(getAPIBase(), {
            method: 'POST',
            body: JSON.stringify({
                csvData: this.props.data,
                settings: this.state
            })})
            .then((response) => response.json())
            .then((responseJson) => {
                this.props.updateResponse(responseJson);})
            .catch((error) => {
                console.error(error);});
    };

    // fetch()

    render() {
        const {updatePage} = this.props;
        return (
            <div>
                <h2>Projection Settings:</h2>
                <div style={listStyle}>
                    <div style={diningHallStyle}>
                        Avg. Days At Dining Hall
                    </div>
                    <span style={switchStyle}>
                        <Switch size='small' color='primary' defaultChecked={true} onChange={((event, checked) => this.setState({sun: checked}))}/>
                        Sunday
                    </span>
                    <br/>
                    <span style={switchStyle}>
                        <Switch size='small' color='primary' defaultChecked={true} onChange={((event, checked) => this.setState({mon: checked}))}/>
                        Monday
                    </span>
                    <br/>
                    <span style={switchStyle}>
                        <Switch size='small' color='primary' defaultChecked={true} onChange={((event, checked) => this.setState({tue: checked}))}/>
                        Tuesday
                    </span>
                    <br/>
                    <span style={switchStyle}>
                        <Switch size='small' color='primary' defaultChecked={true} onChange={((event, checked) => this.setState({wed: checked}))}/>
                        Wednesday
                    </span>
                    <br/>
                    <span style={switchStyle}>
                        <Switch size='small' color='primary' defaultChecked={true} onChange={((event, checked) => this.setState({thu: checked}))}/>
                        Thursday
                    </span>
                    <br/>
                    <span style={switchStyle}>
                        <Switch size='small' color='primary' defaultChecked={true} onChange={((event, checked) => this.setState({fri: checked}))}/>
                        Friday
                    </span>
                    <br/>
                    <span style={switchStyle}>
                        <Switch size='small' color='primary' defaultChecked={true} onChange={((event, checked) => this.setState({sat: checked}))}/>
                        Saturday
                    </span>
                </div>
                <br/>
                {this.noneSelected() ? (
                    <div style={errorMsg}>You must select at least one day</div>
                ) : null}
                <div style={sliderStyle}>
                    Meal Plan
                    <Slider min={40} max={200} step={null} marks={this.mealPlanMarks} aria-label='Meal Plan' onChange={(event, value) => this.setState({mealPlan: value})}/>
                </div>
                <br/>
                <div style={sliderStyle}>
                    Meals Per Day
                    <Slider min={0} max={5} step={1} marks={this.mealsPerDayMarks} aria-label='Meals Per Day' onChange={(event, value) => this.setState({mealsPerDay: value})}/>
                </div>
                <div style={nextButton}>
                    <Button disabled={this.noneSelected()} variant="outlined" color="primary" onClick={this.makeAPICall}>
                        calculate!
                    </Button>
                </div>

                <div style={backButton}>
                    <Button variant="outlined" color="primary" onClick={() => updatePage('welcome')}>
                        restart
                    </Button>
                </div>

            </div>
        )
    }
}

export default Settings;