import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';

import MuiNumpad from 'mui-numpad';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        width: '100%',
    }
}));

function SimpleNumpad() {
    const classes = useStyles();
    const [value, setValue] = useState();

    const onChange = (_value) => {
        setValue(_value);
    }

    return (
        <Grid container spacing={2}>
            <Grid item className={classes.gridItem} xs={3}>
                <TextField 
                margin="dense"
                className={classes.textField}
                value={value}
                variant="outlined" />
            </Grid>
            <Grid item xs={3}>
                <MuiNumpad
                    onChange={onChange}
                />
            </Grid>
        </Grid>
    );
}

export default SimpleNumpad;