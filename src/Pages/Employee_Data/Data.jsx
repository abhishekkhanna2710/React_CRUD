import { useState, useEffect } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';

import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Paper,
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

    const handleEdit = (employee) => {
        // handle edit logic
    };

    const handleDelete = (employee) => {
        // handle delete logic
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
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
                                <Button variant="contained" color="primary" onClick={() => handleEdit(e)}><EditOutlinedIcon /></Button>
                                <Button variant="contained" color="secondary" onClick={() => handleDelete(e)}><DeleteOutlineTwoToneIcon /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>
    );
}

export default DataTable;
