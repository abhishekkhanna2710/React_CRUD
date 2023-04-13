import React from 'react'
import { AppBar, Stack, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {

    const NavStyle = {
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
        fontWeight: 500,
        margin: "10px 20px"
    }
    return (
        <div style={{ margin: "0px auto", }}  >

            <AppBar position='static'>
                <Toolbar >

                    <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>
                        <Button color='inherit'> <Link style={NavStyle} to="/">CRUD</Link></Button>
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <Button color='inherit'> <Link style={NavStyle} to="/">Details</Link></Button>
                        <Button color='inherit'>  <Link style={NavStyle} to="/data">Data</Link></Button>
                    </Stack>
                </Toolbar>


            </AppBar>
        </div>
    )
}

export default Navbar