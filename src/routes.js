import { LOGIN_ROUTE, PAGE_ROUTE, NAVIGATOR_ROUTE } from "./utils/consts";
import Login from "./Components/Login";
import Page from "./Components/Page";
import Navigator from "./Components/Navigator";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: PAGE_ROUTE,
        Component: Page
    }
]

export const navigatorRoutes = [
    {
        path: NAVIGATOR_ROUTE,
        Component: Navigator
    }
]