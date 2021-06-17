import React, { useContext } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Context} from "../index";
import {privateRoutes, publicRoutes} from '../routes';
import { LOGIN_ROUTE, PAGE_ROUTE } from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth'

const AppRouter = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)

    console.log(user)

    return user ?
    (
        <Switch>
            {privateRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true}/>
            )}
        <Redirect to={PAGE_ROUTE}/>
        </Switch>
    )
    :
    (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true}/>
            )}
        <Redirect to={LOGIN_ROUTE}/>
        </Switch>
    )
};

export default AppRouter;