import React from 'react'
import { Button, FormControl, Typography } from '@mui/material';
import { Card, CardContent, Grid, InputLabel, Input, FormHelperText } from '@mui/material';
import { FilledInput, TextField } from '@mui/material';


function Employee() {
    return (
        <div>

            <br />
            <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
                <CardContent>
                    <Typography gutterBottom={true} align='center' variant='h5'>Employer details</Typography>
                    <form>
                        <Grid container spacing={1}>

                            <Grid item xs={12} sm={12}>
                                <TextField type='text' label="Name" placeholder='Enter your name' variant="outlined" fullWidth required />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField type='email' label="Email" placeholder='Enter email' variant="outlined" fullWidth required />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField type='number' label="Phone Number" placeholder='Enter phone number' variant="outlined" fullWidth required />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField type='date' variant="outlined" fullWidth required />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <Button type='submit' color='primary' variant='contained' fullWidth>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
            <br />


        </div>
    )
}

export default Employee