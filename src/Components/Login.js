/* import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBClNpGb4KkbSEEDh4S3a_rab58QCPYG_A",
    authDomain: "netflix-af94b.firebaseapp.com",
    databaseURL: "https://netflix-af94b-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base; */

import { Box, Button, Container, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import Header from './Header';
import {Context} from "../index.js";
import firebase from 'firebase';


const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Container>
            <Header />
            <Grid container>
                <h1 style={{ padding: "0px 100px 90px 200px" }}>Рекомендательная система NETFLIX помогает Вам подобрать фильм по нескольким параметрам!</h1>
            </Grid>
            <Grid container
                //style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                //justify={"center"}
            >
                <Grid style={{width: 400, background: 'lightgray'}}
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box p={5}>
                        <Button onClick={login}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Login;