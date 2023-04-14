import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id)
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/data/${id}`)
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

    const handleUpdate = () => {
        fetch(`http://localhost:3000/data/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                navigate('/Employee_Data');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <h2>Edit Employee</h2>
            <form>
                <div>
                    <TextField name="name" label="Name" value={employee.name} onChange={handleInputChange} />
                </div>
                <div>
                    <TextField name="email" label="Email" value={employee.email} onChange={handleInputChange} />
                </div>
                <div>
                    <TextField name="phone" label="Phone" value={employee.phone} onChange={handleInputChange} />
                </div>
                <div>
                    <TextField name="dob" label="DOB" value={employee.dob} onChange={handleInputChange} />
                </div>
                <div>
                    <TextField name="gender" label="Gender" value={employee.gender} onChange={handleInputChange} />
                </div>
                <div>
                    <TextField name="hobbies" label="Hobbies" value={employee.hobbies} onChange={handleInputChange} />
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
                </div>
            </form>
        </>
    );
}

export default Edit;
