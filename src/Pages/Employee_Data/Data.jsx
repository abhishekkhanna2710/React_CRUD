import { useState, useEffect } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import Navbar from '../../Components/Navbar/Navbar';

import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Paper,
    Typography
} from '@mui/material';

function DataTable() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await fetch('http://localhost:3000/data');
            const data = await response.json();
            setEmployees(data);
            console.log(data)
        };

        fetchEmployees();
    }, []);


    const handleEdit = (id, updatedData) => {
        fetch(`http://localhost:3000/data/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setEmployees(employees.map(e => e.id === id ? updatedData : e));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    const handleDelete = (id) => {
        fetch(`http://localhost:3000/data/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setEmployees(employees.filter(e => e.id !== id));
            })
            .catch(error => {
                console.error('Error:', error);
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
                        <TableRow style={{ background: "#92C7F3" }}>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>DOB</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Hobbies</TableCell>
                            <TableCell>Action</TableCell>
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
                                    <Button variant="contained" color="primary" onClick={() => handleEdit(e.id)}><EditOutlinedIcon /></Button>
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
