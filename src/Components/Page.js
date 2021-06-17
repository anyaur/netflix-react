import { AppBar, Button, Container, Grid, Toolbar } from '@material-ui/core';
import React, { useContext } from 'react';
import {Context} from "../index";
import {useAuthState} from 'react-firebase-hooks/auth';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import { NAVIGATOR_ROUTE } from '../utils/consts';
import {Route, Switch, Redirect} from 'react-router-dom';
import { navigatorRoutes } from '../routes';
import App from '../App';

const Page = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <Container>
            <Grid container>
                <Header />
                <h1 style={{ padding: "0px 100px 90px 200px" }}>Рекомендательная система NETFLIX помогает Вам подобрать фильм по нескольким параметрам!</h1>
                <NavLink to='/navigator'>
                    <Button variant="contained" color="secondary" size="large" justify={"center"} style={{ margin: "0px 10px 100px 100px", color: "white"}}>Подобрать фильм</Button>
                </NavLink>

                {/* <Button onClick={() => <Switch>
                    {navigatorRoutes.map(({path, Component}) =>
                        <Route path={path} component={Component} exact={true}/>
                    )}
                    <Redirect to={NAVIGATOR_ROUTE}/>
                </Switch>} variant="contained" color="secondary" size="large" justify={"center"} style={{ margin: "0px 10px 100px 100px", color: "white"}}>Подобрать фильм</Button> */}
                

                <Button variant="contained" color="secondary" size="large" justify={"center"} style={{ margin: "0px 10px 100px 10px", color: "white"}}>Понравившиеся</Button>
                <Button variant="contained" color="secondary" size="large" justify={"center"} style={{ margin: "0px auto 100px 10px", color: "white"}}>Поиск</Button>

            </Grid>
        </Container>
    )
};

export default Page;