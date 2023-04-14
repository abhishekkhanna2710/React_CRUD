import React from 'react';
import { useState, useEffect } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';


import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Paper,
    Typography,
    TextField
} from '@mui/material';

function DataTable() {
    const tableStyle = {
        background: "#92C7F3"
    }
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await fetch('https://agreeable-pear-swordfish.cyclic.app/data');
            const data = await response.json();
            setEmployees(data);
            console.log(data)
        };

        fetchEmployees();
    }, []);


    const handleUpdate = (id) => {
        navigate(`/edit/${id}`);
    };


    //Delete functionality

    const handleDelete = (id) => {
        fetch(`https://agreeable-pear-swordfish.cyclic.app/data/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setEmployees(employees.filter(e => e.id !== id));
            })
            .catch(error => {
                console.log('Error:', error);
            });
    };
    return (
        <>
            <Navbar />

            <Typography variant='h4' align='center' gutterBottom
                style={{ marginTop: "20px" }}
            >
                Employees Data
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={tableStyle}>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Email</b></TableCell>
                            <TableCell><b>Phone</b></TableCell>
                            <TableCell><b>DOB</b></TableCell>
                            <TableCell><b>Gender</b></TableCell>
                            <TableCell><b>Hobbies</b></TableCell>
                            <TableCell><b>Actions</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((e) => (
                            <TableRow key={e.id}>
                                <TableCell>{e.name}</TableCell>
                                <TableCell>{e.email}</TableCell>
                                <TableCell>{e.phone}</TableCell>
                                <TableCell>{e.dob}</TableCell>
                                <TableCell>{e.gender}</TableCell>
                                <TableCell>{e.hobbies}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => handleUpdate(e.id)}><EditOutlinedIcon /></Button>
                                    <Button variant="contained" color="secondary" onClick={() => handleDelete(e.id)}><DeleteOutlineTwoToneIcon /></Button>




                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
        </>
    );
}

export default DataTable;
