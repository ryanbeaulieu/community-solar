import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {TextField, Button} from '@material-ui/core';
import useStyles from 'react-jss';

import {styles} from './Zipcode.styles';

class ZipcodeForm extends Component {

    state = {
        submitted: false,
        invalid: false
    }

    constructor() {
        super();
        this.input = React.createRef();
    }

    validateZipcode() {

        this.setState({submitted: true});

        fetch(`https://us-zipcode.api.smartystreets.com/lookup?auth-id=998c1480-e009-8141-1805-5a17d8bedb2b&auth-token=moxJUrLclycRDzhYKa8y&zipcode=${this.input.current.value}&input_id=0&key=2049972006035579`)
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
            if(data[0].status && (data[0].status === "invalid_zipcode" || data[0].status === "blank")) {
                this.setState({invalid: true})
            }

            if(data[0].city_states) {
                this.props.history.push("/test");
            }
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <form className={classes.form}>
                <TextField error={this.state.submitted && this.state.invalid} helperText={this.state.submitted && this.state.invalid ? "Please ented a valid U.S. zipcode." : null} className={classes.input} type="number" label="Enter your zip code" variant="outlined" inputProps={{ref: this.input}} />
                <Button variant="contained" className={classes.button} color="primary" onClick={this.validateZipcode.bind(this)}>Check eligibility</Button>
            </form>
        )
    }
}

const Zipcode = withRouter(useStyles(styles)(ZipcodeForm));
export {Zipcode}