import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import Navbar from '../../Components/Navbar/Navbar';
// import { redirect } from "react-router-dom";
function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id)
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        fetch(`https://agreeable-pear-swordfish.cyclic.app/data/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setEmployee(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleUpdate = (e) => {
        fetch(`https://agreeable-pear-swordfish.cyclic.app/data/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert("Go to data");
            })
            .catch(error => {
                console.error('Error:', error);
                navigate('/Employee_Data');
                ;
            });
    };

    return (
        <>
            <Navbar />
            <br />
            <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
                <CardContent>
                    <Typography gutterBottom={true} align='center' variant='h5'>Update Data</Typography>
                    <form>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <TextField name="name" value={employee.name} onChange={handleInputChange} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField name="email" value={employee.email} onChange={handleInputChange} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField name="phone" value={employee.phone} onChange={handleInputChange} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField name="dob" value={employee.dob} onChange={handleInputChange} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField name="gender" value={employee.gender} onChange={handleInputChange} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField name="hobbies" value={employee.hobbies} onChange={handleInputChange} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
                            </Grid>
                        </Grid >
                    </form>
                </CardContent>
            </Card>
        </>
    );
}

export default Edit;
