import React, { useContext } from 'react';
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import './Registration.css'
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from "../index";

const Registration = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return <div className='registration'>
        <AppBar color='secondary'>
            <Toolbar variant="dense">
                <Grid container justify={"flex-end"}>
                    {
                        user ?
                            <Button onClick={() => auth.signOut()} variant="contained" size="large" color="secondary">Выйти</Button>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <Button variant="contained" size="large" color="secondary">Войти</Button>
                            </NavLink>      
                    }
                </Grid>
            </Toolbar>    
        </AppBar>
    </div>
}


export default Registration;