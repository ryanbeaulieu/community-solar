import React,{Component} from 'react';
import useStyles from 'react-jss';
import {Slider, Typography} from '@material-ui/core';

import {styles} from './Eligibility.styles';

const sunlightMarks = [
    {
        value: 4,
        label: "High"
    },
    {
        value: 3,
        label: "Moderate"
    },
    {
        value: 2,
        label: "Little"
    },
    {
        value: 1,
        label: "Uncertain"
    }
]

const electricMarks = [
    {
        value: 4,
        label: "$200+"
    },
    {
        value: 3,
        label: "$150-$199"
    },
    {
        value: 2,
        label: "$100-$149"
    },
    {
        value: 1,
        label: "$0-$99"
    }
]

class EligibilityView extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className="container">
                <form>
                    <div className="form-row">
                        <Typography variant="h6">How much sunlight does your roof get?</Typography>
                        <Slider 
                            marks={sunlightMarks}
                            min={1}
                            max={4}
                            step={1}
                            defaultValue={1}
                        />
                    </div>
                    <div className="form-row">
                        <Typography variant="h6">How much is your monthly electric bill?</Typography>
                        <Slider 
                            marks={electricMarks}
                            min={1}
                            max={4}
                            step={1}
                            defaultValue={1}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

const Eligibility = useStyles(styles)(EligibilityView);
export {Eligibility}