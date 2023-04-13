import React from 'react'
import { useState } from 'react';
import { Button, FormControl, Typography } from '@mui/material';
import { Card, CardContent, Grid, Radio, Checkbox, FormGroup } from '@mui/material';
import { FormLabel, FormControlLabel, RadioGroup, TextField } from '@mui/material';
import Navbar from '../../Components/Navbar/Navbar';
import "../../db.json";

function Employee() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('female');
    const [hobbies, setHobbies] = useState({
        cricket: false,
        reading: false,
        dsa: false
    });

    const handleHobbiesChange = (event) => {
        setHobbies({ [event.target.name]: event.target.checked });

    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name: name,
            email: email,
            phone: phone,
            dob: dob,
            gender: gender,
            hobbies: (() => {
                if (hobbies.cricket) {
                    return "Cricket";
                } else if (hobbies.reading) {
                    return "Reading Books";
                } else if (hobbies.dsa) {
                    return "DSA";
                } else {
                    return "";
                }
            })(),
        };

        fetch('http://localhost:3000/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        // console.log(formData);
    };

    return (
        <div>
            <Navbar />

            <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
                <CardContent>
                    <Typography gutterBottom={true} align='center' variant='h5'>Employer details</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1}>

                            <Grid item xs={12} sm={12}>
                                <TextField type='text' label="Name" placeholder='Enter your name' variant="outlined" fullWidth required value={name} onChange={(event) => setName(event.target.value)} />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField type='email' label="Email" placeholder='Enter email' variant="outlined" fullWidth required value={email} onChange={(event) => setEmail(event.target.value)} />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField type='number' label="Phone Number" placeholder='Enter phone number' variant="outlined" fullWidth required value={phone} onChange={(event) => setPhone(event.target.value)} />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField type='date' variant="outlined" fullWidth required value={dob} onChange={(event) => setDob(event.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        value={gender}
                                        onChange={(event) => setGender(event.target.value)}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <Typography>Hobbies</Typography>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox
                                        name="cricket"
                                        checked={hobbies.cricket}
                                        onChange={handleHobbiesChange}
                                    />} label="Cricket" />
                                    <FormControlLabel control={<Checkbox
                                        name="reading"
                                        checked={hobbies.reading}
                                        onChange={handleHobbiesChange} />} label="Reading Books" />
                                    <FormControlLabel control={<Checkbox
                                        name="dsa"
                                        checked={hobbies.dsa}
                                        onChange={handleHobbiesChange} />} label="DSA" />

                                </FormGroup>
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